import { message } from "antd";
import { ENQUIRY_DEPLOYMENT_API } from "@/utils/endpoints";

export interface EnquiryPayload {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message?: string;
}

const API_URL = ENQUIRY_DEPLOYMENT_API;
export async function submitEnquiry(payload: EnquiryPayload) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        redirect: "follow",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          ...payload,
          website: "", 
          source: "rekhadental.com",
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const text = await response.text();
      const data = JSON.parse(text);
  
      if (!data.success) {
        message.error(data.message || "Failed to submit enquiry.");
        return data;
      }
  
      message.success(data.message || "Enquiry submitted successfully!");
      return data;
  
    } catch (error) {
      console.error("Submission failed:", error);
      message.error("Unable to submit enquiry. Please check your connection and try again.");
      return { success: false, message: "Network or parsing error occurred." };
    }
  }