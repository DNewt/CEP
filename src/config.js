export default {
    s3: {
      REGION: "YOUR_S3_UPLOADS_BUCKET_REGION",
      BUCKET: "YOUR_S3_UPLOADS_BUCKET_NAME"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://icf9cdfvyl.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_WMUnhmZmE",
      APP_CLIENT_ID: "395hc1e2bbkls5thh1t54f257v",
      IDENTITY_POOL_ID: "us-east-1:b3a9bdc6-d874-4467-93e4-6e490a7d4e09"
    }
  };
  
  // these should not be in the repo - store the elsewhere when possible
  // secret access key: vLmndYVUaY4RBxkbbanM4jmIAExYJD6dKXZlq2h1
  // access key id: AKIAIASSD6ZX2TYABCIQ