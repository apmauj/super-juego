"use client";

import { useEffect, useRef, useState } from "react";

const SITE_URL = "https://apmauj.github.io/super-juego/";

export default function ShareQRCode() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!open) return;
    let mounted = true;
    setLoading(true);

    (async () => {
      try {
        // dinamically import to avoid SSR issues
        const QR = await import("qrcode");
        const canvas = canvasRef.current;
        if (!canvas || !mounted) return;
        // prefer a clean square of 240px
        const size = 240;
        canvas.width = size;
        canvas.height = size;
        await QR.toCanvas(canvas, SITE_URL, {
          width: size,
          margin: 1,
          color: {
            dark: "#1F2937",
            light: "#ffffff"
          }
        });
      } catch (e) {
        console.error("QR generation failed", e);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [open]);

  return (
    <>
      <button
        id="qr-float-btn"
        title="Mostrar QR para compartir"
        aria-label="Compartir juego por QR"
        onClick={() => setOpen(true)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M3 3h8v8H3z" fill="currentColor" />
          <path d="M13 3h8v1h-7v7h-1z" fill="currentColor" />
          <path d="M13 13h1v1h-1zM16 13h1v1h-1zM19 13h1v1h-1zM16 16h1v1h-1zM13 16h1v1h-1z" fill="currentColor" />
        </svg>
      </button>

      <div className={`qr-modal-overlay ${open ? "show" : ""}`} role="dialog" aria-modal={open} aria-hidden={!open}>
        <div className="qr-modal" role="document">
          <h3 className="qr-modal-title">Compartir juego</h3>
          <div className="qr-modal-body">
            <div className="qr-canvas-wrap">
              <canvas id="qr-canvas" ref={canvasRef} />
              {loading && <div className="qr-loading">Generando...</div>}
            </div>
            <p className="qr-caption">Escaneá el QR para abrir el juego</p>
            <div className="qr-actions">
              <a className="qr-link" href={SITE_URL} target="_blank" rel="noreferrer">Abrir en otra pestaña</a>
              <button className="qr-close" onClick={() => setOpen(false)}>Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
