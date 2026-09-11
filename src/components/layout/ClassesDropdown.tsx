import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { ClassDetailModal } from "@/components/classes/ClassDetailModal";
import { CLASSES, type YogaClass } from "@/data/classes";

export function ClassesDropdown() {
  const [open, setOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<YogaClass | null>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  const openClass = (item: YogaClass) => {
    setOpen(false);
    setSelectedClass(item);
  };

  return (
    <div
      ref={wrapper}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <Link
        to="/classes"
        aria-expanded={open}
        aria-haspopup="true"
        onFocus={() => setOpen(true)}
        className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-base font-semibold text-foreground/80 transition-colors hover:text-forest data-[status=active]:text-forest data-[status=active]:font-bold"
      >
        Programs
        <ChevronDown
          className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </Link>

      {open ? (
        <div className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3">
          <ul className="overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-lifted">
            {CLASSES.map((item) => (
              <li key={item.slug}>
                <button
                  type="button"
                  onClick={() => openClass(item)}
                  className="block w-full rounded-xl px-3 py-2.5 text-left text-sm text-foreground/80 transition-colors hover:bg-light-sage hover:text-forest"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {selectedClass ? (
        <ClassDetailModal yogaClass={selectedClass} onClose={() => setSelectedClass(null)} />
      ) : null}
    </div>
  );
}
