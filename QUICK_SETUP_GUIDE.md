# Quick Setup Guide - Send Form Data to Gmail

Follow these steps to send contact form data to **omersamer120@gmail.com**:

## Step 1: Get Your EmailJS Public Key

1. Go to: https://dashboard.emailjs.com/
2. Sign in (or create free account)
3. Click **Account** → **General** (in left sidebar)
4. Find **Public Key** section
5. Copy your Public Key (looks like: `abc123xyz456` or `user_abc123xyz`)

## Step 2: Create Email Template

1. In EmailJS dashboard, go to **Email Templates**
2. Click **Create New Template**
3. Fill in:

   **Template Name:** `BrandShift Contact Form`
   
   **To Email:** `omersamer120@gmail.com`
   
   **From Name:** `BrandShift Website`
   
   **Subject:** `New Contact Form: {{from_name}}`
   
   **Content:**
   ```
   New contact form submission from BrandShift website:
   
   Name: {{from_name}}
   Business Name: {{business_name}}
   WhatsApp: {{whatsapp}}
   
   Message:
   {{message}}
   
   ---
   Sent from BrandShift contact form
   ```

4. Click **Save**
5. Copy the **Template ID** (looks like: `template_abc123` or just `abc123`)

## Step 3: Update script.js

Open `script.js` and replace these two lines:

**Line 67** - Replace with your Public Key:
```javascript
const EMAILJS_PUBLIC_KEY = "YOUR_ACTUAL_PUBLIC_KEY_HERE";
```

**Line 69** - Replace with your Template ID:
```javascript
const EMAILJS_TEMPLATE_ID = "YOUR_ACTUAL_TEMPLATE_ID_HERE";
```

## Step 4: Test It!

1. Open your website
2. Fill out the contact form
3. Click "Send Message"
4. Check **omersamer120@gmail.com** for the email!

## Your Service ID (Already Set ✅)
- Service ID: `service_43qfybg` (already configured)

## Troubleshooting

**Error: "Invalid public key"**
- Make sure you copied the entire Public Key
- Check for extra spaces

**Error: "Template not found"**
- Make sure you're using the Template ID (not Template Name)
- Template ID usually starts with `template_`

**Error: "Service not found"**
- Your Service ID `service_43qfybg` should be correct
- Make sure the service is connected to your Gmail

## Free Tier Limits
- 200 emails per month (free)
- Perfect for contact forms!

