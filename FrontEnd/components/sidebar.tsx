'use client';

import { cn } from '@/lib/utils';
import {
  BookOpen,
  ImageIcon,
  LayoutDashboard,
  Map,
  Newspaper,
  Settings,
} from 'lucide-react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import FreeCounter from './free-counter';
const montserrat = Montserrat({ weight: '600', subsets: ['latin'] });
interface SidebarProps {
  limitCount: number;
  isPro: boolean;
  setOpen?: () => void;
}
const routes = [
  {
    label: 'Trang Chủ',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Từ Điển',
    icon: BookOpen,
    href: '/dictionary',
    color: 'text-violet-500',
  },
  {
    label: 'Phân Loại Rác',
    icon: ImageIcon,
    href: '/detectwaste',
    color: 'text-pink-700',
  },
  {
    label: 'Trạm Tái Chế Gần Đây',
    icon: Map,
    href: '/map',
    color: 'text-orange-700',
  },
  {
    label: 'Tin Tức',
    icon: Newspaper,
    href: '/news',
    color: 'text-emerald-500',
  },

  {
    label: 'Cài Đặt',
    icon: Settings,
    href: '/settings',
  },
];
const Sidebar = ({ limitCount = 0, isPro = false, setOpen }: SidebarProps) => {
  let pathname = usePathname();
  return (
    <div className='flex flex-col  text-white py-4 h-full space-y-4  '>
      <div className='flex-1 px-3 py-2'>
        <Link href='/dashboard' className='flex items-center pl-3 mb-14'>
          <div className='w-8 h-8 relative mr-4 '>
            <Image fill src='/logo.png' alt='logo' />
          </div>
          <div className={cn('text-2xl font-bold', montserrat.className)}>
            LogiRecy
          </div>
        </Link>
        <div className='space-y-1 '>
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                'text-[#a1a1aa] hover:bg-white/10 hover:text-white flex justify-start font-medium cursor-pointer text-sm p-3 w-full rounded-lg transition',
                pathname === route.href
                  ? 'bg-white/10 text-white'
                  : 'text-zinc-400'
              )}
              onClick={setOpen}
            >
              <div className='flex items-center flex-1'>
                <route.icon className={cn('w-5 h-5 mr-3', route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter apiLimitCount={limitCount} isPro={isPro} />
    </div>
  );
};

export default Sidebar;
