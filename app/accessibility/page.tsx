import type { Metadata } from "next";
import Link from "next/link";
import { Assistant } from "next/font/google";
import {
  BRAND,
  PHONE_DISPLAY,
  TEL_URL,
  EMAIL,
  MAIL_URL,
  ACCESSIBILITY_COORDINATOR,
  ACCESSIBILITY_UPDATED,
} from "../_components/contact";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `הצהרת נגישות | ${BRAND}`,
  description:
    "הצהרת הנגישות של אתר פאנל-שד — רמת התאמה לתקן הישראלי 5568 (WCAG 2.0 AA), ההתאמות שבוצעו ופרטי רכז הנגישות.",
};

const ACCENT = "#2f8fd6";

const h2: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 800,
  color: "#2f2f2f",
  margin: "34px 0 12px",
};

const p: React.CSSProperties = {
  margin: "0 0 14px",
  fontSize: 16,
  lineHeight: 1.85,
  color: "#4a4a4a",
};

const li: React.CSSProperties = { marginBottom: 8 };

const link: React.CSSProperties = { color: ACCENT, fontWeight: 700 };

/**
 * הצהרת נגישות — legally required for a business serving the public online in
 * Israel (חוק שוויון זכויות לאנשים עם מוגבלות + תקנות נגישות לשירות). Declares the
 * conformance level (ת"י 5568 / WCAG 2.0 AA), the measures taken, known
 * limitations, and the named accessibility coordinator's contact details.
 */
export default function AccessibilityStatement() {
  return (
    <main
      id="main-content"
      data-id="accessibility-statement"
      className={assistant.className}
      dir="rtl"
      style={{
        maxWidth: 820,
        margin: "0 auto",
        padding: "40px 24px 80px",
        color: "#3a3a3a",
        textAlign: "right",
      }}
    >
      <Link
        data-id="accessibility-back-home"
        href="/"
        style={{ ...link, fontSize: 14, textDecoration: "none" }}
      >
        ← חזרה לעמוד הבית
      </Link>

      <h1
        data-id="accessibility-title"
        style={{ fontSize: 30, fontWeight: 800, color: "#2f2f2f", margin: "18px 0 10px" }}
      >
        הצהרת נגישות
      </h1>

      <p data-id="accessibility-intro" style={p}>
        אתר <strong>{BRAND}</strong> רואה חשיבות רבה במתן שירות שוויוני לכלל
        הלקוחות, ופועל להנגשת האתר ותכניו לאנשים עם מוגבלות, בהתאם לחוק שוויון
        זכויות לאנשים עם מוגבלות, התשנ&quot;ח-1998 ולתקנות שוויון זכויות לאנשים
        עם מוגבלות (התאמות נגישות לשירות), התשע&quot;ג-2013.
      </p>

      <h2 data-id="accessibility-level-title" style={h2}>
        רמת הנגישות באתר
      </h2>
      <p data-id="accessibility-level-text" style={p}>
        האתר הונגש בהתאם לתקן הישראלי ת&quot;י 5568 לנגישות תכנים באינטרנט, ברמת
        AA, המבוסס על הנחיות הנגישות הבין-לאומיות{" "}
        <span dir="ltr">WCAG 2.0</span>. ההנגשה בוצעה במבנה האתר עצמו (קוד נגיש)
        ולא באמצעות תוסף או רכיב חיצוני בלבד.
      </p>

      <h2 data-id="accessibility-measures-title" style={h2}>
        ההתאמות שבוצעו באתר
      </h2>
      <ul data-id="accessibility-measures-list" style={{ ...p, paddingInlineStart: 22 }}>
        <li style={li}>ניווט מלא באמצעות מקלדת בכל רכיבי האתר, כולל סימון מיקוד (focus) ברור.</li>
        <li style={li}>קישור &quot;דלג לתוכן&quot; לדילוג ישיר אל התוכן המרכזי.</li>
        <li style={li}>מבנה כותרות סמנטי תקין והגדרת שפת המסמך לעברית ולכיווניות מימין לשמאל.</li>
        <li style={li}>טקסט חלופי (alt) לתמונות המוצר ותיאורי כפתורים וקישורים לקוראי מסך.</li>
        <li style={li}>תוויות (labels) לשדות הטופס ולבחירת מאפייני המוצר.</li>
        <li style={li}>שימוש בתכונות ARIA לחלונות קופצים (דיאלוג), גלריה ובקרות אינטראקטיביות.</li>
        <li style={li}>שמירה על ניגודיות צבעים מספקת בין טקסט לרקע.</li>
        <li style={li}>התאמה לתצוגה רספונסיבית ולהגדלת התצוגה (zoom) ללא אובדן תוכן.</li>
      </ul>

      <h2 data-id="accessibility-usage-title" style={h2}>
        שימוש באתר עם טכנולוגיות מסייעות
      </h2>
      <p data-id="accessibility-usage-text" style={p}>
        האתר נבדק ונתמך בדפדפנים הנפוצים בגרסאותיהם העדכניות (Chrome, Firefox,
        Safari, Edge) ובשימוש עם קוראי מסך. לחוויית גלישה מיטבית מומלץ לעבוד עם
        דפדפן מעודכן.
      </p>

      <h2 data-id="accessibility-limitations-title" style={h2}>
        מגבלות נגישות ידועות
      </h2>
      <p data-id="accessibility-limitations-text" style={p}>
        למרות מאמצינו להנגיש כל עמוד ורכיב באתר, ייתכן שחלקים מסוימים — ובפרט
        רכיב תכנון התלת-ממד של המחסן (CAD) המוטמע בעמוד — אינם נגישים במלואם.
        אנו ממשיכים לפעול לשיפור הנגישות. אם נתקלתם ברכיב שאינו נגיש, נשמח שתעדכנו
        אותנו ונעשה כל מאמץ לספק לכם את המידע או השירות בדרך חלופית.
      </p>

      <h2 data-id="accessibility-contact-title" style={h2}>
        רכז הנגישות ופנייה בנושאי נגישות
      </h2>
      <p data-id="accessibility-contact-text" style={p}>
        אם נתקלתם בבעיית נגישות באתר, או שיש לכם הצעה לשיפור, נשמח שתפנו אל רכז
        הנגישות שלנו. נשתדל לטפל בפנייתכם בהקדם, ובכל מקרה בתוך זמן סביר ממועד
        קבלתה.
      </p>
      <ul data-id="accessibility-contact-details" style={{ ...p, listStyle: "none", padding: 0 }}>
        <li style={li}>
          <strong>רכז נגישות:</strong> {ACCESSIBILITY_COORDINATOR}
        </li>
        <li style={li}>
          <strong>טלפון:</strong>{" "}
          <a data-id="accessibility-phone" href={TEL_URL} dir="ltr" style={link}>
            {PHONE_DISPLAY}
          </a>
        </li>
        <li style={li}>
          <strong>דוא&quot;ל:</strong>{" "}
          <a data-id="accessibility-email" href={MAIL_URL} dir="ltr" style={link}>
            {EMAIL}
          </a>
        </li>
      </ul>

      <p
        data-id="accessibility-updated"
        style={{ ...p, marginTop: 30, fontSize: 14, color: "#8a8a8a" }}
      >
        הצהרת הנגישות עודכנה לאחרונה בתאריך {ACCESSIBILITY_UPDATED}.
      </p>
    </main>
  );
}
