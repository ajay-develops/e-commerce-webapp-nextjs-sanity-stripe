"use client";

import { toast } from "sonner";

const CopyText = ({
  children,
  copyText,
}: {
  children: React.ReactElement;
  copyText: string;
}) => {
  function handleCopy() {
    try {
      window?.navigator?.clipboard?.writeText(copyText);
      toast.success(`"${copyText}" is copied to clipboard`);
    } catch (err) {
      console.error("error copying text", err);
    }
  }
  return (
    <div className="cursor-copy flex gap-2" onClick={handleCopy}>
      {children}
    </div>
  );
};

export default CopyText;
