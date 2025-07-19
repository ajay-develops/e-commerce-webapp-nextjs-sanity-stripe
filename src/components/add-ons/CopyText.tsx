"use client";

import { CopyIcon } from "@sanity/icons";
import { toast } from "sonner";

const CopyText = ({
  showCopyIcon = false,
  children,
  copyText = "",
}: {
  showCopyIcon?: boolean;
  children: React.ReactElement | any;
  copyText?: string;
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
    <span className="cursor-copy flex gap-2 w-full" onClick={handleCopy}>
      {children}
      {showCopyIcon && <CopyIcon />}
    </span>
  );
};

export default CopyText;
