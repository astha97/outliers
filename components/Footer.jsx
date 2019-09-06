import React from 'react';
import '../styles/footer.css';
import Link from 'next/link';
import FlatAction from './FlatAction';

function Footer() {
  return (
    <div className="footer">
    
      <div className="footer_links">
        <div className="footer__column">
          <Link href="/team">
            <FlatAction>팀</FlatAction>
          </Link>
          <Link href="/about">
            <FlatAction>회사소개</FlatAction>
          </Link>
        </div>
        <div className="footer__column">
          <Link href="/careers">
            <FlatAction>채용</FlatAction>
          </Link>
          <Link href="/news">
            <FlatAction>언론/미디어</FlatAction>
          </Link>
        </div>
        <div className="footer__column">
          <Link href="/notices">
            <FlatAction>공지사항</FlatAction>
          </Link>
          <Link href="/contact">
            <FlatAction>문의하기</FlatAction>
          </Link>
        </div>
        <div className="footer__column">
          <FlatAction onClick={() => window.open('https://www.instagram.com/eggshellstory/?hl=ko')}>
            Eggshell 시작하기
          </FlatAction>
          <FlatAction>App Store</FlatAction>
          <FlatAction>Google Play Store</FlatAction>
        </div>
      </div>
      <div className="footer__company-info">
        <span className="footer__column">&copy; AINE Corp. </span>
        <span className="footer__column">
          ㈜ 에이네 사업자 등록번호 : 494-87-01302 대표 : 심소율{' '}
        </span>
        <span className="footer__column">서울 강남구 테헤란로 427 이메일 : support@aine.world</span>
        <div className="footer__column" style={{ display: 'inline-block' }}>
          <Link href="/terms">
            <span>서비스이용약관</span>
          </Link>
          &nbsp; | &nbsp;
          <Link href="/privacy">
            <span>개인정보처리방침</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
