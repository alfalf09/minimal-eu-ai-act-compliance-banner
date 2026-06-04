# 🇪🇺 Minimal EU AI Act Article 50 (AI Disclosure) Compliance Banner
> A lightweight, modern React + Tailwind CSS popup banner component designed to satisfy the **August 2, 2026** AI Act Transparency requirements in 30 seconds.

---

## 🚨 Why this exists (The August 2, 2026 Deadline)

While most legal blogs and compliance suites tell founders they have until 2027 to comply, they are referring to the *High-Risk AI Systems* deadlines.

For **99% of bootstrapped SaaS startups** and wrappers using external LLMs (OpenAI, Anthropic, Midjourney), the clock runs out on **August 2, 2026** under:
*   **Article 50 (Transparency)**: Direct requirement to disclose when a natural person is interacting with an AI system.
*   **Article 4 (AI Literacy)**: Mandate to ensure your employees are trained in secure, compliant AI tool usage.

Failing to satisfy the Article 50 transparency disclosure could expose your SaaS to early EU compliance audits. This component handles the disclosure cleanly without ruining your product's UX.

---

## 📦 Features
*   **Art. 50 Compliant**: Plain-language disclosure that users are interacting with an AI-powered agent/system.
*   **Sleek B2B Design**: High-contrast, minimalist dark-mode aesthetic (built with Tailwind CSS).
*   **Excellent UX**: Uses browser `localStorage` to ensure the banner only displays once per user session (doesn't spam return visitors).
*   **Privacy Link**: Includes an inline slot to easily link users directly to your AI Data / Privacy policy section.

---

## 🚀 Quick Setup & Installation

### 1. Copy the Component
Paste the [ComplianceBanner.jsx](ComplianceBanner.jsx) file into your React / Next.js component directory (e.g., `components/ComplianceBanner.jsx`).

### 2. Import & Render (at Root Level)
Import the banner inside your main layout/root file (e.g., `layout.js` or `_app.js`) to ensure global coverage.

```javascript
import ComplianceBanner from './components/ComplianceBanner';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Satisfy Article 50 Compliance globally */}
        <ComplianceBanner productName="Our AI Support Assistant" />
      </body>
    </html>
  );
}
```

---

## 🛡️ Beyond Article 50: Is Your SaaS Fully Compliant?

Displaying a disclosure banner is only **1 of the 4 steps** bootstrapped teams need to take before the August 2 deadline. To fully shield your SaaS from liabilities, you also need to:
1.  **Map your "Shadow AI"**: Log every external AI tool your employees (developers, support, marketing) use.
2.  **Establish a Staff AI Usage Policy**: Legally forbid staff from copy-pasting customer PII into standard consumer AI endpoints (to prevent massive GDPR leaks).
3.  **Document Employee Training**: Prove to EU regulators that your team has received standard "AI Literacy" training.

### 🛠️ Get Your Complete, Ready-To-Use DIY Kit for \$29
If you don't want to pay enterprise compliance platforms \$10,000/year to manage this, you can use our 60-minute, self-serve **SME AI Act Starter Kit** (\$29):

*   **15-Minute Staff AI Training Deck**: Ready-to-present slides that tick the Article 4 record-keeping box.
*   **Airtable & Excel Shadow AI Registry**: Fully pre-mapped logbook to find and manage tool security.
*   **2-Page Legal Action Checklist**: Plain-English list of what to add to your privacy policy and terms.

👉 **[Get the $29 DIY Compliance Starter Kit (Use code 'READER10' for 10% off)](https://frelih.gumroad.com/l/mjsaqg)**

For a free 2-minute diagnostic to check if you fall under Article 50 or Article 4:
👉 **[Take the Free Compliance Diagnostic / Gratis-Check](https://frelih.gumroad.com)**

---

## 📄 License
This project is open-source and licensed under the MIT License. Feel free to use, modify, and distribute it inside your commercial applications.
