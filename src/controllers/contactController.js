const Contact = require('../models/Contact');
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation serveur de base
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "Tous les champs sont obligatoires." });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ success: false, error: "Format d'email invalide." });
    }

    if (name.length < 2 || message.length < 10) {
      return res.status(400).json({ success: false, error: "Les données sont trop courtes." });
    }

    // 1. Sauvegarde en base de données
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // 2. Envoi de l'email via Resend
    await resend.emails.send({
      from: 'Gabon HubTech <onboarding@resend.dev>',
      to: [process.env.RECEIVER_EMAIL], 
      subject: `Nouveau message de ${name}`,
      html: `<p><strong>Nom:</strong> ${name}</p><p><strong>Message:</strong> ${message}</p>`
    });

    res.status(201).json({ success: true, message: "Message reçu et enregistré !" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};