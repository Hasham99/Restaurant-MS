import '../../styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/components/Header';
import HeaderMobile from '@/components/Header-mobile';
import MarginWidthWrapper from '@/components/margin-width-wrapper';
import PageWrapper from '@/components/page-wrapper';
import SideNav from '@/components/side-nav';


export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <div className="flex">
          <SideNav />
          <main className="flex-1">
            <MarginWidthWrapper>
              <Header />
              <HeaderMobile />
              <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>
          </main>
        </div>
  );
}