* {
  box-sizing: border-box;
}

:root {
  --green-900: #075e54;
  --green-700: #128c7e;
  --green-500: #25d366;
  --bg: #f4f7f8;
  --surface: #ffffff;
  --ink: #122126;
  --muted: #5f6f76;
  --border: #dfe9ec;
  --shadow: 0 12px 36px rgba(17, 39, 46, 0.08);
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(180deg, #eafafb 0%, var(--bg) 100%);
  color: var(--ink);
}

button,
input,
textarea {
  font: inherit;
}

.app-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 16px 48px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.eyebrow {
  margin: 0 0 6px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 11px;
  color: var(--green-700);
  font-weight: 700;
}

h1,
h2,
p {
  margin-top: 0;
}

h1 {
  font-size: clamp(2rem, 4vw, 2.7rem);
  margin-bottom: 0;
}

.layout {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.panel {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 20px;
  box-shadow: var(--shadow);
}

.form-panel, .preview-panel {
  min-height: 340px;
}

.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

label {
  display: block;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 18px;
}

input,
textarea {
  width: 100%;
  margin-top: 8px;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px 14px;
  background: #fdfefe;
}

input:focus,
textarea:focus {
  outline: 3px solid rgba(18, 140, 126, 0.12);
  border-color: var(--green-700);
}

.actions {
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
}

.primary-button,
.ghost-button,
.whatsapp-button {
  border: none;
  border-radius: 12px;
  padding: 12px 18px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.primary-button {
  background: linear-gradient(135deg, var(--green-700), var(--green-900));
  color: white;
}

.ghost-button {
  background: #eef5f4;
  color: var(--green-900);
}

.primary-button:hover,
.ghost-button:hover,
.whatsapp-button:hover {
  transform: translateY(-1px);
}

.phone-preview {
  background: #f0f2f3;
  border-radius: 22px;
  padding: 18px;
  min-height: 180px;
  display: flex;
  align-items: flex-end;
  margin-top: 12px;
}

.bubble {
  max-width: 80%;
  border-radius: 18px;
  padding: 14px 16px;
  font-size: 0.96rem;
  line-height: 1.5;
}

.bubble.incoming {
  background: #ffffff;
  border: 1px solid #e9edf0;
}

.cta-row {
  margin-top: 18px;
}

.whatsapp-button {
  background: #25d366;
  color: #0f2b23;
  width: 100%;
}

.list-panel {
  max-width: 1200px;
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.confirmation-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.confirmation-card {
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: #f9fbfb;
}

.confirmation-card h3 {
  margin: 0 0 10px;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0;
}

.badge {
  background: #e5f7ef;
  color: #0b6d52;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.76rem;
  font-weight: 700;
}

.badge.pending {
  background: #fff6d8;
  color: #7b5700;
}

.badge.confirmed {
  background: #e8f8f0;
  color: #116b4d;
}

.actions-inline {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.status-button {
  background: #ebf3f5;
  border: none;
  border-radius: 10px;
  padding: 8px 10px;
  font-weight: 700;
  cursor: pointer;
}

.status-button.confirm {
  background: #dffaf0;
  color: #0d6d51;
}

.status-button.pending {
  background: #fff4d7;
  color: #8a6710;
}

@media (max-width: 760px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .field-row {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }
}
