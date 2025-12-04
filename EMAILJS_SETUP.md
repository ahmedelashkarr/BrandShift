# EmailJS Setup Instructions

To enable email sending from the contact form, you need to set up EmailJS (free service).

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create an Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your Gmail account (omersamer120@gmail.com)
5. Note the **Service ID** (you'll need this)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Content:**
```
You have received a new message from the BrandShift contact form.

Name: {{from_name}}
Business Name: {{business_name}}
WhatsApp: {{whatsapp}}

Message:
{{message}}

---
This email was sent from the BrandShift website contact form.
```

4. Set **To Email** to: `omersamer120@gmail.com`
5. Note the **Template ID** (you'll need this)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called API Key)
3. Copy it

## Step 5: Update the Code

Open `script.js` and replace these placeholders:

1. Replace `YOUR_PUBLIC_KEY` with your EmailJS Public Key
2. Replace `YOUR_SERVICE_ID` with your Service ID
3. Replace `YOUR_TEMPLATE_ID` with your Template ID

**Example:**
```javascript
emailjs.init("abc123xyz");  // Your Public Key
emailjs.send('service_abc123', 'template_xyz789', templateParams)  // Your Service ID and Template ID
```

## Step 6: Test

1. Open your website
2. Fill out the contact form
3. Click "Send Message"
4. Check omersamer120@gmail.com for the email

## Free Tier Limits

- 200 emails per month (free tier)
- Perfect for small businesses
- No credit card required

## Troubleshooting

- Make sure all IDs are correct
- Check browser console for errors
- Verify your EmailJS service is connected
- Ensure the template variables match ({{from_name}}, {{business_name}}, etc.)

