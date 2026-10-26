export const S3 = {
  BUCKET: process.env.S3_BUCKET!,
  REGION: process.env.S3_REGION!,
  ACCESS_KEY_ID: process.env.S3_ACCESS_KEY_ID!,
  SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY!,
  ENDPOINT: process.env.S3_ENDPOINT!,
}

export const DATABASE_URI = process.env.DATABASE_URI!

export const APP_URL = process.env.NEXT_PUBLIC_SERVER_URL!

export const APP_NAME = process.env.APP_NAME!

export const PAYLOAD = {
  SECRET: process.env.PAYLOAD_SECRET!,
  PREVIEW: process.env.PAYLOAD_PREVIEW_SECRET!,
  CRON_SECRET: process.env.PAYLOAD_CRON_SECRET!,
}

export const TIMEZONES = {
  SUPPORTED_TIMEZONES: [
    {
      label: 'America/Halifax',
      value: 'America/Halifax',
    },
  ],
  DEFAULT_TIMEZONE: 'America/Halifax',
}

export const EMAIL = {
  API_KEY: process.env.RESEND_API_KEY!,
  DEFAULT_EMAIL: process.env.DEFAULT_EMAIL!,
  DEFAULT_FROM_NAME: APP_NAME!,
}