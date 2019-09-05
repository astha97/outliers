import React, { Component, Fragment } from 'react';

import '../styles/roles-section.css';
import FlatAction from './FlatAction';
import Modal from './Modal';

class RolesSection extends Component {
  // Description of Roles
  static roles = [
    {
      id: 'LD',
      title: 'LEAD DEVELOPER',
      content: (
        <Fragment>
          <br />
          <h2>업무</h2>
          <ul>
            <li>React Native 기반 MERN 스택 어플리케이션 개발팀을 리드</li>
            <li>에이네 서비스의 안정화 및 고도화</li>
            <li>운영 서비스 유지 보수 및 서버 운영</li>
            <li>Designer, Marketer, Data scientist 등과의 협업을 통한 서비스 개발 및 개선 진행</li>
          </ul>
          <br />
          <h2>지원자격</h2>
          <ul>
            <li>Agile 및 Scrum 개발 프로세스에 능숙하신 분</li>
            <li>Stack Overflow 참조가 가능할 정도로 영어가 능숙하신 분</li>
            <li>React Native 개발 경력 1년 이상</li>
            <li>MERN 스택 개발 경력 3년 이상</li>
            <li>Redux, Service Worker, DNS 설정 (AWS, Route53) 경험이 있으신 분</li>
            <li>
              서버 구성 및 보안 설정 경력 (AWS EC2/ S3), Docker등을 사용한 어플리케이션 배포 경력
            </li>
            <li>변화를 두려워하지 않고 새로운 기술에 빠르게 적응하며 지속적인 성장을 원하는 분</li>
          </ul>
          <br />
          <h2>우대 조건</h2>
          <ul>
            <li>유명 앱 개발팀 소속 경험</li>
            <li>Java 및 Swift 개발 경력</li>
            <li>TensorFlow 개발 경력</li>
            <li>서비스 코드를 빠르게 이해하고 즉각적인 유지보수가 가능하신 분</li>
            <li>성능최적화와 운영자동화를 위한 지속적인 노력을 할 수 있는 분</li>
          </ul>
        </Fragment>
      ),
    },
    {
      id: 'CD',
      title: 'CREATIVE DIRECTOR',
      content: (
        <Fragment>
          <br />
          <h2>업무</h2>
          <ul>
            <li>BX/BI 설계 및 디자인 방향성 정립</li>
            <li>에이네 브랜딩 전략 수립 및 실행</li>
            <li>에이네만의 차별화 된 브랜드 이미지 구축</li>
            <li>고객접점에서 다양 한 온오프라인 브랜딩 활동 기획 및 실행, 분석</li>
            <li>제품과 비즈니스 문제 도출 및 해결</li>
          </ul>
          <br />
          <h2>지원자격</h2>
          <ul>
            <li>브랜드 스토리텔링을 리딩/경험 해보신 분</li>
            <li>본인이 기획하고 실행한 브랜딩 활동의 성공 경험</li>
            <li>일러스트, 그래픽 디자인, 타이포그래피, 아이콘 등 시각화에 뛰어난 분</li>
            <li>ATL/BTL/SNS 등 다양한 커뮤니 케이션 채널을 통한 브랜딩 경험이 있는 분</li>
            <li>유관 부서와의 협업 및 커뮤니케이션이 가능한 분</li>
            <li>비즈니스 관점에서 브랜딩의 방향성을 이해하시는 분</li>
            <li>Sketch 또는 photoshop을 통한 app/web UI 디자인이 가능한 분</li>
          </ul>
          <br />
          <h2>우대 조건</h2>
          <ul>
            <li>브랜드 경험 등 업무 경력 3년 이상(혹은 그에 준하는 역량)</li>
            <li>IT 산업군에서 브랜딩을 진행해보신 분</li>
            <li>
              Google Analytics 나 Mixpanel, Appsflyer 등 데이터 수집/분석 툴이나 A/B 테스팅 툴을
              통해 디자인을 평가하고 제품 개선한 경험
            </li>
            <li>글쓰기 및 카피라이팅 경험이 풍부한 분</li>
          </ul>
        </Fragment>
      ),
    },
    {
      id: 'MGD',
      title: 'MOTION GRAPHIC DESIGNER',
      content: (
        <Fragment>
          <br />
          <h2>업무</h2>
          <ul>
            <li>모션 효과 제작</li>
            <li>최소화된 리소스로 영상을 제작해 가설을 검증하고 개선하는 일</li>
            <li>영상을 통해 빠르게 가설을 검증할 수 있는 업무프로세스 구축</li>
            <li>검증된 가설을 퀄리티 있는 영상으로 제작</li>
            <li>
              Youtube 채널에서 에이네 서비스 성장을 위한 광고 가설 테스트 (채널구독자가 아닌 에이네
              고객 증가)
            </li>
          </ul>
          <br />
          <h2>지원자격</h2>
          <ul>
            <li>Adobe Photoshop, After Effects, Premiere 사용이 능숙한 분</li>
            <li>Illustrator & photoshop 활용 가능</li>
            <li>가설 검증을 위해 스마트폰 촬영과 같이 최소한의 리소스로 영상 제작이 가능한 분</li>
            <li>영상 콘텐츠 기획, 촬영, 편집이 능숙한 분</li>
            <li>
              영상의 성과는 제작에 투입된 리소스와 상관 없고 콘텐츠의 구조에 달려 있다고 생각하는 분
            </li>
          </ul>
          <br />
          <h2>우대 조건</h2>
          <ul>
            <li>영상 퀄리티가 반드시 퍼포먼스와 비례하지 않는다고 생각하시는 분</li>
            <li>리소스를 최소화 하는 데에 거부감 이 없으신 분</li>
            <li>영상 마케팅 경력자 (영상에이전시 / 프로덕션 / 포스트프로덕션 근무 경험)</li>
            <li>SNS관리 경험이 풍부한 분</li>
          </ul>
        </Fragment>
      ),
    },
    {
      id: 'CM',
      title: 'CONTENTS MARKETER',
      content: (
        <Fragment>
          <br />
          <h2>업무</h2>
          <ul>
            <li>
              콘텐츠를 통해 빠르게 실행하여 작은 가설을 검증하는 활동 (해당 미디어의 성장이 아닌
              에이네 고객의 증가)
            </li>
            <li>콘텐츠를 통해 Acquisition point, Call to Action 메시지 발굴</li>
          </ul>
          <br />
          <h2>지원자격</h2>
          <ul>
            <li>Illustrator & photoshop 등의 활용으로 콘텐츠 제작 스킬을 갖 춘 분</li>
            <li>스스로 목표와 전략을 설정하고 논리적인 커뮤니케이션을 통한 협업이 가능한 분</li>
          </ul>
          <br />
          <h2>우대 조건</h2>
          <ul>
            <li>콘텐츠 완성도가 아닌 impact(서비스의 성장)를 추구 하는 분</li>
            <li>직감보다 논리에 기반을 두고 콘텐츠 제작에 임하시는 분</li>
            <li>
              가장 기초작업부터 배포까지 본인이 직접 콘텐츠와 프로덕트를 만들어 본 경험이 있으신 분
            </li>
          </ul>
        </Fragment>
      ),
    },
    {
      id: 'CDAM',
      title: 'CONTENTS DESIGNER ASSISTANT MANAGER',
      content: (
        <Fragment>
          <br />
          <h2>업무</h2>
          <ul>
            <li>주요 경쟁사/간접 경쟁사 제작 콘텐츠 리서치</li>
            <li>에이네 타겟층 니즈 리서치</li>
            <li>SNS 상에 업로드 할 콘텐츠 제작</li>
            <li>콘텐츠 디자인 기획 및 분석</li>
          </ul>
          <br />
          <h2>지원자격</h2>
          <ul>
            <li>스타트업에 대한 막연한 관심이 아닌 스타트업 생태계에 대한 갈망이 있는 분</li>
            <li>내가 이 일을 왜 하는지 설명 할 수 있는 논리적인 분</li>
            <li>Illustrator & photoshop 등의 활용으로 콘텐츠 제작 스킬을 갖 춘 분</li>
          </ul>
          <br />
          <h2>우대 조건</h2>
          <ul>
            <li>콘텐츠 제작 포트폴리오 제출</li>
            <li>공모전 수상 이력</li>
          </ul>
        </Fragment>
      ),
    },
    {
      id: 'MSAM',
      title: 'MARKETING STRATEGY ASSISTANT MANAGER',
      content: (
        <Fragment>
          <br />
          <h2>업무</h2>
          <ul>
            <li>경쟁사/간접 경쟁사 마케팅 이벤트 리서 치</li>
            <li>에이네 타겟층 니즈 리서치</li>
            <li>리서치 기반 마케팅 이벤트 효과 분석</li>
            <li>제휴 가능한 기업 리서치</li>
            <li>마케팅 전략 기반 적합한 채널 리서치 및 분석</li>
          </ul>
          <br />
          <h2>지원자격</h2>
          <ul>
            <li>스타트업에 대한 막연한 관심이 아닌 스타트업 생태계에 대한 갈망이 있는 분</li>
            <li>내가 이 일을 왜 하는지 설명 할 수 있는 논리적인 분</li>
            <li>Microsoft Word, Excel, PPT 작 업이 능숙한 분</li>
          </ul>
          <br />
          <h2>우대 조건</h2>
          <ul>
            <li>전략 학회 등 교내 활동 경험</li>
            <li>컨설팅 펌 혹은 러시치 펌 관련 활동 경험</li>
          </ul>
        </Fragment>
      ),
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      selectedRole: 0,
      showModal: false,
    };
    this.switch = this.switch.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  switch(page) {
    this.setState({ selectedRole: page });
  }

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { selectedRole, showModal } = this.state;
    const { title, content } = RolesSection.roles[selectedRole];
    return (
      <div className="roles-section">
        <div className="roles-section__side-menu">
          {RolesSection.roles.map((role, index) => (
            <FlatAction key={role.id} onClick={() => this.switch(index)}>
              {role.title}
            </FlatAction>
          ))}
        </div>
        <div className="roles-section__main">
          <h1>{title}</h1>
          {content}
          <FlatAction primary onClick={this.openModal}>
            Apply
          </FlatAction>
        </div>
        <Modal show={showModal} target={title} onExit={this.closeModal} />
      </div>
    );
  }
}

export default RolesSection;
