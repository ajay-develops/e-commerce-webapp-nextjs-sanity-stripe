"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useBasketStore } from "@/store/store";
import CopyText from "@/components/add-ons/CopyText";
import { CopyIcon } from "lucide-react";

function SuccessPage() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  const clearBasket = useBasketStore((state) => state.clearBasket);
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (orderNumber) {
      clearBasket();
    }
  }, [orderNumber, clearBasket]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-12 rounded-xl shadow-lg max-w-2xl w-full mx-4">
        <div className="flex justify-center mb-8">
          <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-6 text-center">
          Thank You for Your Order!
        </h1>
        <div className="border-1 border-b border-gray-200 rounded-lg py-6 px-4 mb-6">
          <p className="text-center text-lg text-gray-700 mb-4">
            Your order has been confirmed and will be shipped shortly.
          </p>
          <div className="space-y-2">
            {orderNumber && (
              <p className="text-gray-600 flex items-center space-x-5 flex-col">
                <span>Order Number:</span>
                <span className="font-mono text-sm text-green-600 text-wrap">
                  <CopyText copyText={orderNumber}>
                    <>
                      <span className="break-words">{orderNumber}</span>
                      <CopyIcon size={14} />
                    </>
                  </CopyText>
                </span>
              </p>
            )}
            {sessionId && (
              <p className="text-center text-gray-600 flex justify-between flex-col">
                <span>Transaction ID:</span>
                <span className="font-mono text-sm text-wrap inline-block pb-4">
                  <CopyText copyText={sessionId}>
                    <>
                      <span className="w-[90%] break-words">{sessionId}</span>
                      <CopyIcon size={14} />
                    </>
                  </CopyText>
                </span>
              </p>
            )}
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-gray-600 text-center">
            A confirmation email has been sent to your registered email address.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href={"/orders"}>View Order Details</Link>
            </Button>
            <Button asChild variant={"outline"}>
              <Link href={"/"}>Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
