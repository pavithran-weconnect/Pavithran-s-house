output "website_bucket_name" {
  description = "Private S3 bucket used as the CloudFront origin."
  value       = aws_s3_bucket.website.bucket
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID used for cache invalidations."
  value       = aws_cloudfront_distribution.website.id
}

output "cloudfront_domain_name" {
  description = "Default CloudFront domain name for the hosted website."
  value       = aws_cloudfront_distribution.website.domain_name
}

output "website_url" {
  description = "HTTPS URL for the deployed website."
  value       = "https://${aws_cloudfront_distribution.website.domain_name}"
}

