import { FaFacebookF } from "react-icons/fa6";
import { SiZalo } from "react-icons/si";

const contacts = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61577751600681",
    icon: FaFacebookF,
    bg: "bg-[#1877F2]",
    delay: "0s",
  },
  {
    name: "Zalo",
    href: "https://zalo.me/0938588350",
    icon: SiZalo,
    bg: "bg-[#0068FF]",
    delay: "0.8s",
  },
];

export default function FloatingContact() {
  return (
    <div
      className="fixed bottom-5 right-3 z-50 flex flex-col gap-3 md:bottom-8 md:right-6"
      aria-label="Kênh liên hệ"
    >
      {contacts.map((contact) => {
        const Icon = contact.icon;

        return (
          <a
            key={contact.name}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Liên hệ qua ${contact.name}`}
            title={contact.name}
            className="group relative flex items-center justify-center"
          >
            {/* Tooltip */}
            <span
              className="
                pointer-events-none absolute right-[calc(100%+12px)]
                whitespace-nowrap rounded-lg bg-gray-900
                px-3 py-1.5 text-xs font-semibold text-white
                opacity-0 shadow-lg
                translate-x-2 transition-all duration-300
                group-hover:translate-x-0 group-hover:opacity-100
              "
            >
              {contact.name}
            </span>

            {/* Pulse effect */}
            <span
              className={`
                absolute inset-0 rounded-full
                ${contact.bg}
                opacity-30
                animate-ping
              `}
              style={{
                animationDuration: "2.8s",
                animationDelay: contact.delay,
              }}
            />

            {/* Main icon */}
            <div
              className={`
                relative flex h-11 w-11 items-center justify-center
                rounded-full border-2 border-white
                ${contact.bg}
                text-white shadow-lg
                transition-all duration-300 ease-out
                group-hover:scale-110
                group-hover:-translate-y-1
                group-hover:shadow-xl
                md:h-12 md:w-12
              `}
            >
              <Icon className="text-[21px] md:text-[23px]" />
            </div>
          </a>
        );
      })}
    </div>
  );
}