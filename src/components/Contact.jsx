import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FiSend, FiMail, FiSliders, FiFileText } from "react-icons/fi";

export default function Contact({ theme }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [activeTab, setActiveTab] = useState("body");
  const [status, setStatus] = useState(""); // success/error status
  const [responsePayload, setResponsePayload] = useState(null);
  const [loading, setLoading] = useState(false);

  const activeColor = theme === "matrix" ? "text-matrix-green" : "text-cyber-cyan";
  const activeBorder = theme === "matrix" ? "border-matrix-green/30 focus:border-matrix-green bg-[#070b12]/95" : "border-cyber-cyan/30 focus:border-cyber-cyan bg-[#070b12]/95";
  const activeBtn = theme === "matrix" ? "bg-matrix-green text-black hover:bg-matrix-green/90" : "bg-cyber-cyan text-black hover:bg-cyber-cyan/90";

  // Dynamic JSON request body preview
  const jsonPreview = JSON.stringify(
    {
      name: formData.name || "...",
      email: formData.email || "...",
      message: formData.message || "...",
      sentAt: new Date().toISOString(),
    },
    null,
    2
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("sending");
    setResponsePayload(null);

    // Formspree requires _replyto instead of email for some presets
    const payload = {
      name: formData.name,
      _replyto: formData.email,
      message: formData.message,
    };

    try {
      const res = await axios.post("https://formspree.io/f/xeolvlkz", payload, {
        headers: { Accept: "application/json" },
      });
      
      setStatus("success");
      setResponsePayload({
        status: "200 OK",
        timestamp: new Date().toISOString(),
        body: {
          success: true,
          message: "HTTP POST request resolved. Message forwarded to Aman's inbox.",
          trackingId: Math.random().toString(36).substring(2, 11).toUpperCase(),
        },
      });
      setFormData({ name: "", email: "", message: "" }); // Reset fields
    } catch (error) {
      setStatus("error");
      setResponsePayload({
        status: "500 Internal Server Error",
        timestamp: new Date().toISOString(),
        body: {
          success: false,
          error: "Failed to dispatch REST payload. Verify connectivity and retry.",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="my-10 relative">
      {/* Title */}
      <div className="flex items-center gap-2 mb-6">
        <FiMail className={activeColor} />
        <h3 className="text-xl sm:text-2xl font-bold text-slate-100 uppercase tracking-wider">
          rest_client_dispatcher.sh
        </h3>
      </div>

      {/* API Client Window */}
      <div className="rounded-xl border border-slate-800 bg-[#070b12]/95 backdrop-blur-md overflow-hidden shadow-2xl flex flex-col font-mono text-xs">
        
        {/* API Address bar */}
        <div className="bg-slate-900/90 border-b border-slate-800 p-3 flex flex-wrap gap-2.5 items-center justify-between">
          <form onSubmit={handleSubmit} className="flex-1 flex gap-2 items-center">
            {/* HTTP Method Dropdown (visual only) */}
            <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-500 font-bold border border-amber-500/30">
              POST
            </span>
            
            {/* Mock Endpoint field */}
            <div className="flex-1 bg-slate-950 px-3 py-1.5 rounded border border-slate-800 text-slate-400 select-all overflow-x-auto whitespace-nowrap">
              https://api.amantaycon.dev/v1/contact
            </div>
            
            {/* Execute Button */}
            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-1.5 rounded font-bold font-mono transition-all duration-300 flex items-center gap-1.5 ${activeBtn}`}
            >
              <span>{loading ? "SENDING" : "SEND"}</span>
              <FiSend className="text-xs" />
            </button>
          </form>
        </div>

        {/* API Request Configuration tabs */}
        <div className="bg-slate-900 border-b border-slate-800 flex gap-0.5 select-none">
          <button
            onClick={() => setActiveTab("body")}
            className={`px-4 py-2 border-r border-slate-800/80 flex items-center gap-1.5 ${
              activeTab === "body" ? "bg-[#070b12] text-slate-100 border-b-2 border-b-cyan-400" : "text-slate-400 hover:bg-slate-800/30"
            }`}
          >
            <FiSliders className="text-xs" />
            <span>Body (Parameters)</span>
          </button>
          <button
            onClick={() => setActiveTab("headers")}
            className={`px-4 py-2 border-r border-slate-800/80 flex items-center gap-1.5 ${
              activeTab === "headers" ? "bg-[#070b12] text-slate-100 border-b-2 border-b-cyan-400" : "text-slate-400 hover:bg-slate-800/30"
            }`}
          >
            <FiFileText className="text-xs" />
            <span>Headers (2)</span>
          </button>
        </div>

        {/* Panel Content (Form Inputs & JSON Preview Grid) */}
        <div className="p-5 grid md:grid-cols-12 gap-6 items-stretch bg-slate-950">
          
          {activeTab === "body" ? (
            <>
              {/* Form Input fields */}
              <form onSubmit={handleSubmit} className="md:col-span-6 space-y-4">
                <div>
                  <label className="block text-[11px] text-slate-500 uppercase font-bold mb-1">Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full p-2.5 rounded bg-slate-900 border text-slate-200 font-mono outline-none ${activeBorder}`}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-slate-500 uppercase font-bold mb-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full p-2.5 rounded bg-slate-900 border text-slate-200 font-mono outline-none ${activeBorder}`}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-slate-500 uppercase font-bold mb-1">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`w-full p-2.5 rounded bg-slate-900 border text-slate-200 font-mono outline-none ${activeBorder}`}
                    placeholder="Hi Aman, let's connect..."
                  />
                </div>
              </form>

              {/* JSON Live Preview */}
              <div className="md:col-span-6 flex flex-col justify-between">
                <div className="text-[11px] text-slate-500 uppercase font-bold mb-1 select-none">
                  JSON Payload Preview (Body)
                </div>
                <div className="flex-1 p-3 rounded bg-[#070b12] border border-slate-900 text-slate-400 overflow-auto whitespace-pre font-mono text-[11px] min-h-[220px]">
                  {jsonPreview}
                </div>
              </div>
            </>
          ) : (
            /* Headers tab */
            <div className="md:col-span-12 space-y-3 font-mono text-slate-400 p-2 min-h-[260px]">
              <div className="grid grid-cols-12 gap-2 border-b border-slate-800 pb-2 text-[10px] text-slate-500 uppercase font-bold font-sans">
                <div className="col-span-6">Key</div>
                <div className="col-span-6">Value</div>
              </div>
              <div className="grid grid-cols-12 gap-2 text-xs">
                <div className="col-span-6 font-bold text-slate-200">Content-Type</div>
                <div className="col-span-6 text-slate-400">application/json</div>
              </div>
              <div className="grid grid-cols-12 gap-2 text-xs">
                <div className="col-span-6 font-bold text-slate-200">Accept</div>
                <div className="col-span-6 text-slate-400">application/json</div>
              </div>
            </div>
          )}
        </div>

        {/* API Response Window Panel */}
        <div className="border-t border-slate-800 bg-[#070b12] p-4 font-mono text-xs">
          <div className="flex justify-between items-center text-slate-500 text-[10px] uppercase font-bold mb-2">
            <span>Response Console</span>
            {responsePayload && (
              <span className={status === "success" ? "text-emerald-400" : "text-red-400"}>
                Status: {responsePayload.status}
              </span>
            )}
          </div>

          <div className="bg-slate-950 border border-slate-900 rounded p-3 text-[11px] text-slate-400 overflow-x-auto min-h-[90px]">
            {responsePayload ? (
              <pre className={status === "success" ? "text-emerald-400" : "text-red-400"}>
                {JSON.stringify(responsePayload.body, null, 2)}
              </pre>
            ) : status === "sending" ? (
              <div className="text-amber-500 animate-pulse">
                POSTING payload to target server... Waiting for response...
              </div>
            ) : (
              <span className="text-slate-600">No request dispatched. Waiting for client event...</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
