"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ici, vous pourriez ajouter la logique pour envoyer les données du formulaire
    console.log("Form data submitted:", formData);
    // Réinitialiser le formulaire après soumission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-12 space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-border rounded-md bg-clear dark:bg-secondary text-neutral dark:text-neutral-foreground"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-border rounded-md bg-clear dark:bg-secondary text-neutral dark:text-neutral-foreground"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-border rounded-md bg-clear dark:bg-secondary text-neutral dark:text-neutral-foreground"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground dark:bg-secondary dark:text-secondary-foreground py-3 rounded-md hover:opacity-90 transition-opacity"
      >
        Enviar Mensagem
      </button>
    </form>
  );
}
