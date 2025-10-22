"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "@/app/components/SignUp/Signup.module.css";
import { useRouter } from "next/navigation";

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    birthDate: string;
}

export default function SignUpForm() {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        phone: "",
        birthDate: ""
    });

    const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({});
    const [message, setMessage] = useState<string>("");

    const router = useRouter();

    const validateField = (name: string, value: string): string | undefined => {
        switch (name) {
            case "fullName":
                if (!value || value.trim() === "") {
                    return "Full name is required";
                }

                const words = value.trim().split(/\s+/);
                if (words.length < 2) {
                    return "Full name must contain at least two words";
                }

                const invalidWord = words.find(word => /^\d/.test(word));
                if (invalidWord) {
                    return "No word can start with a number";
                }
                break;

            case "email":
                if (!value || !/^\S+@\S+\.\S+$/.test(value)) {
                    return "Invalid email address";
                }
                break;

            case "phone":
                if (!value || !/^\d+$/.test(value)) {
                    return "Phone number must contain only digits";
                }
                if (value.length < 7 || value.length > 15) {
                    return "Phone number must be between 7 and 15 digits";
                }
                break;

            case "birthDate":
                const birth = new Date(value);
                const today = new Date();
                const age = today.getFullYear() - birth.getFullYear();
                if (age < 18) {
                    return "You must be at least 18 years old";

                }
                break;
        }

        return undefined;
    };


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors: typeof errors = {};
        Object.entries(formData).forEach(([key, value]) => {
            const error = validateField(key, value);
            if (error) newErrors[key] = error;
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setMessage("Registration successful!");
            setFormData({ fullName: "", email: "", phone: "", birthDate: "" });
            setTimeout(() => {
                router.push("/");
            }, 200);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.inputGroup}>
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className={styles.inputField}
                />
                {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}
            </div>

            <div className={styles.inputGroup}>
                <input
                    type="text"
                    name="phone"
                    placeholder="03-1234567"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={styles.inputField}
                />
                {errors.phone && <p className={styles.error}>{errors.phone}</p>}
            </div>

            <div className={styles.inputGroup}>
                <input
                    type="email"
                    name="email"
                    placeholder="example@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.inputField}
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>

            <div className={styles.inputGroup}>
                <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    required
                    className={styles.inputField}
                />
                {errors.birthDate && <p className={styles.error}>{errors.birthDate}</p>}
            </div>

            <button type="submit" className={styles.submitButton}>
                Sign Up
            </button>
            {message && <p className={styles.successMessage}>{message}</p>}
        </form>
    )
}

