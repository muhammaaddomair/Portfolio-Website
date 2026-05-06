"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type InvoiceItem = {
  id: number;
  regNo: string;
  batchNo: string;
  mfgDate: string;
  expDate: string;
  quantity: number;
  description: string;
  pricePerUnit: number;
};

const initialItems: InvoiceItem[] = [
  {
    id: 1,
    regNo: "DRAP-1291",
    batchNo: "BT-2403",
    mfgDate: "01/2026",
    expDate: "01/2028",
    quantity: 40,
    description: "Amoxicillin 500mg Capsules",
    pricePerUnit: 22
  },
  {
    id: 2,
    regNo: "DRAP-2088",
    batchNo: "CF-8821",
    mfgDate: "02/2026",
    expDate: "02/2028",
    quantity: 25,
    description: "Cefixime 400mg Tablets",
    pricePerUnit: 38
  }
];

const defaultInvoice = {
  fileNo: "F-1032",
  billNo: "INV-2026-031",
  deliveryChallanNo: "DC-8812",
  orderContactNo: "0300-1234567",
  orderDate: "29/03/2026",
  inspectionNoteNo: "IN-4401",
  to: "MediCare Distribution, Saddar Karachi"
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-PK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

export default function InvoiceGeneratorPage() {
  const [invoice, setInvoice] = useState(defaultInvoice);
  const [items, setItems] = useState<InvoiceItem[]>(initialItems);

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.quantity * item.pricePerUnit, 0);

    return {
      subtotal,
      grandTotal: subtotal
    };
  }, [items]);

  const updateInvoiceField = (field: keyof typeof defaultInvoice, value: string) => {
    setInvoice((current) => ({ ...current, [field]: value }));
  };

  const updateItem = <K extends keyof InvoiceItem>(id: number, field: K, value: InvoiceItem[K]) => {
    setItems((current) =>
      current.map((item) => {
        if (item.id !== id) {
          return item;
        }

        return { ...item, [field]: value };
      })
    );
  };

  const addItem = () => {
    setItems((current) => [
      ...current,
      {
        id: Date.now(),
        regNo: "",
        batchNo: "",
        mfgDate: "",
        expDate: "",
        quantity: 1,
        description: "",
        pricePerUnit: 0
      }
    ]);
  };

  const removeItem = (id: number) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  return (
    <main className="min-h-screen bg-[#f4efe8] px-4 py-6 text-[#151515] md:px-6 md:py-8 invoice-page-shell">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-6 xl:flex-row">
        <section className="invoice-controls w-full shrink-0 rounded-[2rem] border border-black/10 bg-white/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] xl:sticky xl:top-6 xl:max-w-[360px] xl:self-start">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8d6a43]">Invoice Demo</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">United Agencies PDF</h1>
            </div>
            <Link href="/" className="rounded-full border border-black/10 px-4 py-2 text-sm hover:border-[#b36d2e] hover:text-[#b36d2e]">
              Back
            </Link>
          </div>

          <p className="mt-4 text-sm leading-6 text-black/65">
            Edit the invoice fields, keep the original template as the page background, then use the print action to save it as a PDF.
          </p>

          <div className="mt-6 grid gap-4">
            <label className="grid gap-2 text-sm">
              <span className="font-medium">File No.</span>
              <input
                value={invoice.fileNo}
                onChange={(event) => updateInvoiceField("fileNo", event.target.value)}
                className="rounded-xl border border-black/10 bg-[#faf7f2] px-4 py-3 outline-none focus:border-[#b36d2e]"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="font-medium">Bill No.</span>
              <input
                value={invoice.billNo}
                onChange={(event) => updateInvoiceField("billNo", event.target.value)}
                className="rounded-xl border border-black/10 bg-[#faf7f2] px-4 py-3 outline-none focus:border-[#b36d2e]"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="font-medium">Delivery Challan No.</span>
              <input
                value={invoice.deliveryChallanNo}
                onChange={(event) => updateInvoiceField("deliveryChallanNo", event.target.value)}
                className="rounded-xl border border-black/10 bg-[#faf7f2] px-4 py-3 outline-none focus:border-[#b36d2e]"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="font-medium">Order / Contact No.</span>
              <input
                value={invoice.orderContactNo}
                onChange={(event) => updateInvoiceField("orderContactNo", event.target.value)}
                className="rounded-xl border border-black/10 bg-[#faf7f2] px-4 py-3 outline-none focus:border-[#b36d2e]"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="font-medium">Order Date</span>
              <input
                value={invoice.orderDate}
                onChange={(event) => updateInvoiceField("orderDate", event.target.value)}
                className="rounded-xl border border-black/10 bg-[#faf7f2] px-4 py-3 outline-none focus:border-[#b36d2e]"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="font-medium">Inspection Note No.</span>
              <input
                value={invoice.inspectionNoteNo}
                onChange={(event) => updateInvoiceField("inspectionNoteNo", event.target.value)}
                className="rounded-xl border border-black/10 bg-[#faf7f2] px-4 py-3 outline-none focus:border-[#b36d2e]"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="font-medium">Bill To</span>
              <textarea
                value={invoice.to}
                onChange={(event) => updateInvoiceField("to", event.target.value)}
                rows={3}
                className="rounded-xl border border-black/10 bg-[#faf7f2] px-4 py-3 outline-none focus:border-[#b36d2e]"
              />
            </label>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-full bg-[#111111] px-5 py-3 text-sm font-medium text-white hover:bg-[#b36d2e]"
            >
              Download PDF
            </button>
            <button
              type="button"
              onClick={addItem}
              className="rounded-full border border-black/10 px-5 py-3 text-sm font-medium hover:border-[#b36d2e] hover:text-[#b36d2e]"
            >
              Add Item
            </button>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-black/60">Subtotal</span>
              <span className="font-semibold">Rs. {formatCurrency(totals.subtotal)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-black/60">Grand Total</span>
              <span className="text-lg font-semibold">Rs. {formatCurrency(totals.grandTotal)}</span>
            </div>
          </div>
        </section>

        <section className="w-full overflow-auto">
          <div className="mx-auto min-w-[820px] max-w-[900px]">
            <div className="invoice-sheet relative overflow-hidden bg-white shadow-[0_32px_80px_rgba(0,0,0,0.18)]">
              <Image
                src="/portfolio-images/united-agencies.png"
                alt="United Agencies invoice template"
                fill
                priority
                sizes="900px"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative h-full w-full">
                <div className="invoice-meta absolute left-[3.7%] top-[29.3%] w-[32%] text-[15px] tracking-[0.08em]">
                  <p className="min-h-[1.55rem]">{invoice.fileNo}</p>
                  <p className="mt-[0.58rem] min-h-[1.55rem]">{invoice.billNo}</p>
                  <p className="mt-[0.6rem] min-h-[1.55rem]">{invoice.deliveryChallanNo}</p>
                  <p className="mt-[0.6rem] min-h-[1.55rem]">{invoice.orderContactNo}</p>
                  <p className="mt-[0.58rem] min-h-[1.55rem]">{invoice.orderDate}</p>
                  <p className="mt-[0.58rem] min-h-[1.55rem]">{invoice.inspectionNoteNo}</p>
                </div>

                <div className="absolute left-[16.3%] top-[45.8%] w-[75%] text-[15px] leading-6 tracking-[0.06em]">
                  {invoice.to}
                </div>

                <div className="absolute left-[2.9%] top-[51.4%] w-[95.2%]">
                  {items.map((item, index) => {
                    const amount = item.quantity * item.pricePerUnit;

                    return (
                      <div
                        key={item.id}
                        className="invoice-row grid items-start text-center text-[13px] leading-5"
                        style={{
                          gridTemplateColumns: "8.5% 9% 10.2% 10% 10.2% 30.4% 8.7% 13%",
                          minHeight: "58px"
                        }}
                      >
                        <div className="invoice-cell">{item.regNo}</div>
                        <div className="invoice-cell">{item.batchNo}</div>
                        <div className="invoice-cell">{item.mfgDate}</div>
                        <div className="invoice-cell">{item.expDate}</div>
                        <div className="invoice-cell">{item.quantity}</div>
                        <div className="invoice-cell px-2 text-left">{item.description}</div>
                        <div className="invoice-cell">{formatCurrency(item.pricePerUnit)}</div>
                        <div className="invoice-cell">{formatCurrency(amount)}</div>

                        <div className="invoice-controls col-span-8 mt-1 flex justify-end gap-2 px-2 pb-1">
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="rounded-full border border-black/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-black/60 hover:border-[#b36d2e] hover:text-[#b36d2e]"
                          >
                            Remove Row {index + 1}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="absolute bottom-[4.2%] right-[4.5%] text-right">
                  <p className="text-[13px] uppercase tracking-[0.24em] text-black/55">Grand Total</p>
                  <p className="mt-2 text-[22px] font-semibold tracking-[0.06em]">Rs. {formatCurrency(totals.grandTotal)}</p>
                </div>
              </div>
            </div>

            <div className="invoice-controls mt-6 rounded-[2rem] border border-black/10 bg-white/85 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
              <p className="text-sm font-medium">Line Items</p>
              <div className="mt-4 space-y-4">
                {items.map((item, index) => (
                  <div key={item.id} className="rounded-[1.5rem] border border-black/10 bg-[#faf7f2] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/45">Item {index + 1}</p>
                    <div className="mt-3 grid gap-3 md:grid-cols-2">
                      <label className="grid gap-2 text-sm">
                        <span>Reg. No.</span>
                        <input
                          value={item.regNo}
                          onChange={(event) => updateItem(item.id, "regNo", event.target.value)}
                          className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#b36d2e]"
                        />
                      </label>
                      <label className="grid gap-2 text-sm">
                        <span>Batch No.</span>
                        <input
                          value={item.batchNo}
                          onChange={(event) => updateItem(item.id, "batchNo", event.target.value)}
                          className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#b36d2e]"
                        />
                      </label>
                      <label className="grid gap-2 text-sm">
                        <span>Mfg. Date</span>
                        <input
                          value={item.mfgDate}
                          onChange={(event) => updateItem(item.id, "mfgDate", event.target.value)}
                          className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#b36d2e]"
                        />
                      </label>
                      <label className="grid gap-2 text-sm">
                        <span>Exp. Date</span>
                        <input
                          value={item.expDate}
                          onChange={(event) => updateItem(item.id, "expDate", event.target.value)}
                          className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#b36d2e]"
                        />
                      </label>
                      <label className="grid gap-2 text-sm">
                        <span>Quantity</span>
                        <input
                          type="number"
                          min="0"
                          value={item.quantity}
                          onChange={(event) => updateItem(item.id, "quantity", Number(event.target.value) || 0)}
                          className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#b36d2e]"
                        />
                      </label>
                      <label className="grid gap-2 text-sm">
                        <span>Price / Unit</span>
                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          value={item.pricePerUnit}
                          onChange={(event) => updateItem(item.id, "pricePerUnit", Number(event.target.value) || 0)}
                          className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#b36d2e]"
                        />
                      </label>
                      <label className="grid gap-2 text-sm md:col-span-2">
                        <span>Product Description</span>
                        <textarea
                          rows={3}
                          value={item.description}
                          onChange={(event) => updateItem(item.id, "description", event.target.value)}
                          className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#b36d2e]"
                        />
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
