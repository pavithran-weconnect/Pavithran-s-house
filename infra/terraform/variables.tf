variable "aws_region" {
  description = "AWS region for the S3 origin bucket and Terraform-managed regional resources."
  type        = string
  default     = "ap-south-1"
}

variable "project_name" {
  description = "Short project name used in AWS resource names and tags."
  type        = string
  default     = "pavithran-house"
}

variable "website_bucket_name" {
  description = "Globally unique S3 bucket name for the private website origin."
  type        = string
  default     = null
}

variable "cloudfront_price_class" {
  description = "CloudFront edge location price class."
  type        = string
  default     = "PriceClass_100"
}

variable "common_tags" {
  description = "Tags added to AWS resources."
  type        = map(string)
  default = {
    Project   = "Pavithran House"
    ManagedBy = "Terraform"
  }
}

