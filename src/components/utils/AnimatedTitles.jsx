
import React, { useEffect, useState } from "react";

const AnimatedTitles = () => {
  const roles = [
    { title: "Web Developer" },
    { title: "Full Stack Developer" },
    { title: "Software Developer" },
    { title: "Android Developer" },
  ];

  const [currentRoleIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const current = roles[currentRoleIndex].title;

      if (!isDeleting) {
        // typing
        setCurrentText(current.substring(0, currentText.length + 1));

        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(500);
        } else {
          setTypingSpeed(150);
        }
      } else {
        // deleting
        setCurrentText(current.substring(0, currentText.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500);
        } else {
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <div className="text-center md:text-start">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
        <span className="text-outline pb-2">{currentText}</span>
        <span className="inline-block h-7 md:h-14 w-0.5 bg-cyan-400 ml-1 animate-pulse"></span>
      </h1>
    </div>
  );
};

export default AnimatedTitles;
