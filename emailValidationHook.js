import { bulkRecordHook } from "@flatfile/plugin-record-hook";

export const emailValidationHook = bulkRecordHook(
  "SoldLog", // Ensure this matches the name of your schema in blueprint.js
  (records) => {
    return records.map((record) => {
      const email = record.get("email") as string;
      if (!email) {
        record.addError("email", "Email is required");
      } else {
        const validEmailAddressRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!validEmailAddressRegex.test(email)) {
          record.addError("email", "Invalid email address");
        }
      }
      return record;
    });
  },
  { chunkSize: 100, parallel: 2 }
);
