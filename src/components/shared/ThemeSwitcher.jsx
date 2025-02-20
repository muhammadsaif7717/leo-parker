'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IoSunnySharp } from 'react-icons/io5';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='' className={`bg-red-300 text-4xl`}>
            {' '}
            {/*Edite here*/}
            {theme === 'dark' ? (
              <IoSunnySharp size={20} />
            ) : (
              <FaMoon className='text-gray-800 dark:text-white' size={15} />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={`w-auto`}>
          <DropdownMenuItem>
            <Button
              variant='ghost'
              className={`w-full justify-start`}
              onClick={() => setTheme('light')}
            >
              Light
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button
              variant='ghost'
              className={`w-full justify-start`}
              onClick={() => setTheme('dark')}
            >
              Dark
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button
              variant='ghost'
              className={`w-full justify-start`}
              onClick={() => setTheme('system')}
            >
              System
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
