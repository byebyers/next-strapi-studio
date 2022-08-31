module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "strapi-provider-upload-aws-s3-advanced",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: env("AWS_REGION"),
        params: {
          bucket: env("AWS_BUCKET"), // or "Bucket", @aws-sdk requires capitalized properties, but the convention for this file is lowercased, but the plugin understands both
          acl: env("AWS_BUCKET_ACL"), // or "ACL", see above
        },
        baseUrl: env("CDN_BASE_URL"), // e.g. "https://cdn.example.com", this is stored in strapi's database to point to the file
        prefix: env("BUCKET_PREFIX"), // e.g. "strapi-assets". If BUCKET_PREFIX contains leading or trailing slashes, they are removed internally to construct the URL safely
      },
    },
  },
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: env("VERCEL_BUILD_WEBHOOK"),
      apiToken: env("VERCEL_API"),
      appFilter: env("VERCEL_APP_NAME"),
      teamFilter: env("VERCEL_TEAM_NAME"),
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
  // ...
});