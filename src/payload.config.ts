import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { resendAdapter } from '@payloadcms/email-resend'
import { buildConfig } from "payload";
import { collections } from "@/collections";
import { plugins } from "@/plugins";
import { DATABASE_URI, EMAIL, PAYLOAD, TIMEZONES } from "@/constants/init";
import { Users } from "@/collections/Users";
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  editor: lexicalEditor(),
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    timezones: {
      supportedTimezones: [...TIMEZONES.SUPPORTED_TIMEZONES],
      defaultTimezone: TIMEZONES.DEFAULT_TIMEZONE,
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        { label: "Mobile", name: "mobile", width: 375, height: 667 },
        { label: "Tablet", name: "tablet", width: 768, height: 1024 },
        { label: "Desktop", name: "desktop", width: 1440, height: 900 },
      ],
    },
  },
  email: resendAdapter({
    defaultFromAddress: EMAIL.DEFAULT_EMAIL,
    defaultFromName: EMAIL.DEFAULT_FROM_NAME,
    apiKey: EMAIL.API_KEY,
  }),
  collections,
  plugins,
  secret: PAYLOAD.SECRET,
  db: mongooseAdapter({
    url: DATABASE_URI,
  }),
  sharp,
});
