# AWS Static Website Deployment

This folder contains Terraform and GitHub Actions deployment setup for the static presentation website.

## What the workflow creates

- Terraform state S3 bucket: `pavithran-house-tfstate-182460208211`
- Private website S3 bucket: `pavithran-house-website-182460208211`
- CloudFront Origin Access Control
- CloudFront distribution using the default `cloudfront.net` HTTPS domain
- S3 bucket policy allowing only the CloudFront distribution to read objects

## GitHub Actions role

The workflow assumes this AWS IAM role through GitHub OIDC:

```text
arn:aws:iam::182460208211:role/pavithran-personal-github-actions
```

The role trust policy must allow this repository to assume the role from GitHub Actions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::182460208211:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
        },
        "StringLike": {
          "token.actions.githubusercontent.com:sub": "repo:pavithran-weconnect/Pavithran-s-house:*"
        }
      }
    }
  ]
}
```

The role also needs permissions for S3, CloudFront, and reading caller identity. Use `infra/github-actions-role-policy.example.json` as a starting point for the permissions policy. If the workflow fails with `AccessDenied`, update the role permissions in AWS IAM.

## Deploy

Push to `main`, or manually run **Deploy AWS static website** from the GitHub Actions tab.

After the action succeeds, the final website URL appears in the workflow logs and in the Terraform output.

## Cost note

This uses AWS resources. For a small static site, cost is normally low and may fit within free allowances, but it is not the same as GitHub Pages. S3 and CloudFront are AWS billable services, so monitor the AWS Billing console.
