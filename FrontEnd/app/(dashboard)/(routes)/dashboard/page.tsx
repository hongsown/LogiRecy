'use client';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  BookOpen,
  VideoIcon,
  Map,
  Newspaper,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const tool = [
  {
    label: 'Từ Điển',
    icon: BookOpen,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    href: '/dictionary',
  },
  {
    label: 'Phân Loại Rác',
    icon: ImageIcon,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    href: '/detectwaste',
  },
  {
    label: 'Trạm Tái Chế Gần Đây',
    icon: Map,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    href: '/map',
  },

  {
    label: 'Tin Tức',
    icon: Newspaper,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    href: '/news',
  },
];
const Dashboard = () => {
  const router = useRouter();
  return (
    <div>
      <div className='mb-8 space-y-4'>
        <h2 className='text-2xl md:text-4xl font-bold text-center'>
          Tái chế - Hành động nhỏ, thay đổi lớn.
        </h2>
        <p className='text-center font-light text-sm md:text-lg text-muted-foreground'>
          Cùng nhau tái chế, biến rác thải thành tài nguyên quý giá.
        </p>
      </div>
      <div className='px-4 md:px-20 lg:px-32 space-y-4'>
        {tool.map((tool) => (
          <Card
            onClick={() => {
              router.push(tool.href);
            }}
            key={tool.href}
            className='p-4 dark:border-white/50 border-black/5 flex items-center justify-between hover:shadow-md dark:hover:opacity-75 transition cursor-pointer'
          >
            <div className='flex items-center gap-x-4'>
              <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                <tool.icon className={cn('w-8 h-8', tool.color)} size={24} />
              </div>
              <div className='font-semibold'>{tool.label}</div>
            </div>
            <ArrowRight />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
