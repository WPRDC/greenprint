"use client";

import PulseLoader from "react-spinners/PulseLoader";

export interface LoadingMessageProps {
  message?: string;
}

export function LoadingMessage({ message }: LoadingMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <PulseLoader color="#4C7737FF" />
      {!!message && <div>{message}</div>}
    </div>
  );
}
