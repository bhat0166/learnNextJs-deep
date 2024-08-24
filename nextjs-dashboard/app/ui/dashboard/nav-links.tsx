import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex md:flex-none justify-center md:justify-start items-center gap-2 bg-gray-50 hover:bg-sky-100 md:px-3 p-3 md:p-2 rounded-md h-[48px] font-medium text-sm hover:text-blue-600 grow"
          >
            <LinkIcon className="w-6" />
            <p className="md:block hidden">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}