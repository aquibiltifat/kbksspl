export const getSwaggerSpec = () => ({
    openapi: "3.0.0",
    info: {
        title: "KBK Sourcing API",
        version: "1.0.0",
        description: "Contact form email API for KBK Sourcing Services",
    },
    servers: [
        {
            url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
            description: "API Server",
        },
    ],
    paths: {
        "/api/contact": {
            post: {
                summary: "Send contact form email",
                description: "Sends an email to admin with contact details and a thank-you email to the user",
                tags: ["Contact"],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                required: ["name", "email", "subject", "message"],
                                properties: {
                                    name: {
                                        type: "string",
                                        description: "User's full name",
                                        example: "John Doe",
                                    },
                                    email: {
                                        type: "string",
                                        format: "email",
                                        description: "User's email address",
                                        example: "john@example.com",
                                    },
                                    phone: {
                                        type: "string",
                                        description: "User's phone number (optional)",
                                        example: "+91 98765 43210",
                                    },
                                    subject: {
                                        type: "string",
                                        description: "Message subject",
                                        example: "Product Inquiry",
                                    },
                                    message: {
                                        type: "string",
                                        description: "User's message",
                                        example: "I would like to know more about your products.",
                                    },
                                },
                            },
                        },
                    },
                },
                responses: {
                    "200": {
                        description: "Email sent successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: { type: "boolean", example: true },
                                        message: { type: "string", example: "Email sent successfully!" },
                                    },
                                },
                            },
                        },
                    },
                    "400": {
                        description: "Missing required fields",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: { type: "boolean", example: false },
                                        error: { type: "string", example: "Missing required fields" },
                                    },
                                },
                            },
                        },
                    },
                    "500": {
                        description: "Server error",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: { type: "boolean", example: false },
                                        error: { type: "string", example: "Failed to send email. Please try again later." },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
});
