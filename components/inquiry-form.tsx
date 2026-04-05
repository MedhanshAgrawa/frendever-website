"use client";

import { FormEvent, useState } from "react";
import { LoaderCircle } from "lucide-react";

const initialState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  category: "",
  quantity: "",
  message: ""
};

export function InquiryForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      setFeedback("Thanks. Your inquiry has been prepared successfully.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Unable to submit your inquiry.");
    }
  }

  return (
    <form className="inquiry-form" onSubmit={onSubmit}>
      <div className="field-grid">
        <label>
          <span>Name *</span>
          <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required />
        </label>
        <label>
          <span>Company *</span>
          <input value={form.company} onChange={(event) => setForm({ ...form, company: event.target.value })} required />
        </label>
        <label>
          <span>Email *</span>
          <input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required />
        </label>
        <label>
          <span>Phone / WhatsApp</span>
          <input value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} />
        </label>
        <label>
          <span>Product category</span>
          <input value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })} placeholder="Bags, aprons, kitchen textiles..." />
        </label>
        <label>
          <span>Estimated quantity</span>
          <input value={form.quantity} onChange={(event) => setForm({ ...form, quantity: event.target.value })} placeholder="Example: 5,000 pcs" />
        </label>
      </div>

      <label>
        <span>Project brief *</span>
        <textarea rows={6} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} required placeholder="Share materials, sizes, trims, print needs, timelines, and market destination." />
      </label>

      <div className="form-footer">
        <button className="button" type="submit" disabled={status === "loading"}>
          {status === "loading" ? <><LoaderCircle size={18} className="spin" /> Sending</> : "Submit inquiry"}
        </button>
        {feedback ? <p className={status === "error" ? "feedback error" : "feedback"}>{feedback}</p> : null}
      </div>
    </form>
  );
}
