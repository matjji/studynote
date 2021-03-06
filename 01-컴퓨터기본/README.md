# 컴퓨터 기본

## 01. 개발자 환경 구축

### 1. 운영체제 개요
    운영체제란 컴퓨터 성능을 높이고, 사용자에게 편의성 제공을 목적으로 하는 컴퓨터 하드웨어 관리하는 프로그램 이다.
    스프트웨어와 하드웨어의 중간 다리 역할.

    Unix : 최초의 운영체제. 
          한 대의 컴퓨터에 여러 사람이 콘솔을 연결하여 사용하는 다중 사용자 지원.
          콘솔상에서 명령어를 입력하는 형태로 사용하였다.

    터미널 : 콘솔상에서 실행하여 명령어를 입력하기 위한 환경

    쉘 : 터미널에 탑제된 명령어 해석기 

    SunOS, Solaris, 그리고 MacOS
    Unix에서 파생된 운영체제들 중 하나이다. 
    SunOS 와 Solaris는 Linux의 점유율이 높아지면서 사용되지 않는다.
    MacOS는 Apple의 하드웨어 전략에 힘입어 활발히 사용되고 있다.

    Linux
    리누스 포발즈가 개발한 다중 사용자용 운영체제이며 오픈소스 프로젝트이다.
    Fedora > RedHat > CentOS 
    무료로 배포되기 떄문에 수많은 기업들이 상용 시스템을 운영하는데 활용하고 있다.

    Windows
    Ms-Dos 계열
    IBM 컴퓨터용 운영체제이다. 파일 시스템으로 FAT32 방식을 채택했다. 
    하지만, 하나의 프로그램에 문제가 생기면 모든 프로그램이 다운되는 블루스크린 이라는 치명적인 결함 발생한다.
    그로인해 Window 3.1 > 95 > 98 > ME 를 끝으로 단종되었다.

    NT계열
    리눅스가 장악하고 있는 기업용 운영체제 시장에 도전하기 위해 개발한 다중 사용자용 운영체제이다.
    블루스크린 단점을 개선한 NTFS 방식이라는 새로운 파일시스템을 개발하였다.
    XP > 7 > 8 > 10 으로 아직 출시되고 있으며 리눅스와 경쟁중이다. 
### 2. 원도우 설치 과정 확인
    윈도우.iso 파일 준비하기 > 순서에 따라 입력> 디스크 파티션 나누기 > 순서에 따라 력하기 > 사용자 이름 영어로 지정 > 순서에 따라 입력 > 끝
### 3. 맥 설치 과정 확인
    16기가 USB 연결 > 응용 프로그램 / 유틸리티 / 디스크 유틸리티.app 실행 > USB 포맷 > APP Store 에서 macOs Big Sur 다운로드 > macOS Big Sur 설치.app 패키지 내용 보기 >
    터미널 실행 후 sudo + createinstallmedia 끌어오기 > --volume /Volumes/macOS 입력> 비밀번호 확인(비밀번호 입력해도 아무것도 안보임) > 설치 USB 생성 완료 > 생성 확인 > 
    부팅과 동시에 왼쪽 option키 누르고 USB 선택 엔터 > macOS Big Sur 설치 > 순서에 따라 입력 > 계정이름 영어 설정 > 끝
### 4. 터미널 명령어
#### 윈도우   
    explorer: 폴더 열기
    explorer . : 현재 폴더 열기
    explorer 경로 : 경로폴더 열기
    
    cd (Change Directory) 경로 : 작업 디렉토리 변경. 맥과 동일함
    C드라이브가 아닌 경우 /d 옵션 사용
     
    cls (Clean Screen) : 화면 초기화

    copy : 파일복사
    copy 원본 원1본 시 원1본으로 복사됨

    del : 파일삭제
    del /p : 파일 삭제시 확인 메세지 표시
    del /s : 지정된 파일을 모든 하위 디렉토리에서 삭제
    del /f : 읽기 전용 파일 삭제
    del /q : 파일 삭제시 메세지 없이 바로 삭제

    dir : 현재 디렉토리 파일의 정보 출력
    dir /b : 파일 이름만 출력
    dir /s : 하위 디렉토리 보기
    dir /ad : 디렉토리만 보기
    dir /ah : 숨긴 파일만 보기
    dir /ar : 읽기 전용 파일만 보기
    dir /as : 시스템 파일만 보기
    dir /p 출력 내용이 한 화면을 벗어나면 잠시 멈춤(아무키 입력시 계속 진행가능)
    dir /w : 파일 이름을 가로로 보여줌

    echo : echo 입력된것 하면 입력된것 이라고 표시됨, 맥과 동일

    exit : 종료

    md : 디렉토리 생성

    rd : 디렉토리 삭제
    rd /s : 비어있지 않은 폴더의 하위 항목까지 모두 삭제

    rename : 이름 바꾸기

#### 맥
    open : 폴더 열기
    open . : 현재 경로 Finder 열기
    open /Users/사용자계정명/Desktop : 데스크탑 위치에서 Finder 열기
    open ~ : 사용자 홈디렉토리에서 Finder열기 (~는 홈 디렉토리)

    pwd: 현재 위치 보기

    cd (Change Directory) : 작업 디렉토리 변경 , 윈도우와 같음

    cp (Copy) : 파일 복사
    cp 원본 원1본 : 원1본으로 복사
    cp -R : 폴더 복사

    rm (Remove) : 파일삭제
    rm -f : 강제로 파일삭제
    rm -r : 디렉토리 내부의 모든 내용 삭제
    rm -d : 비어있는 디렉토리만 제거
    rm -i : 매번 삭제할때마다 사용자에게 삭제할것인지 묻는다.
    rm -v : 삭제되는 대상의 정보를 출력한다.

    ls : 현재 디렉토리 파일의 정보 출력
    ls -l : 리스트 형태로 출력
    ls -a : 숨김파일이나 숨김 디렉토리 출력
    ls -al : 숨김 파일이나 숨김 디렉토리를 포함하여 리스트 형태로 출력. 
    대상디렉토리경로가 지정된 경우 해당 경로 안의 항목을 표시한다. 
    대상디렉토리경로가 지정되지 않은 경우 현재 위치의 항목을 표시한다.

    echo : echo 출력할내용 하면 출력할내용 나옴, 윈도우와 동일

    exit : 종료

    mkdir : 디렉토리 생성

    rmdir : 디렉토리 제거 (비어있어야 함)

    mv 원본경로 대상경로 : 원본경로를 대상 경로로 이동한다. 같은 폴더 안에서 이동일 경우 이름변경 효과.

### 5. 절대경로와 상대경로 개념
    절대 경로는 상위폴더에서 하위 폴더로 가는 경우이다.    
    ex) C:\Users\Sin_jisup\a\b\c    
    이런식으로 완전한 파일 경로를 입력하면 된다.

    상대 경로   
    ex) cd ..\a\b\c
    이런식으로 완전한 파일 경로가 아닌 몇부분을 생략해서 입력하면 된다.
    cd .. 입력시 상위폴더 갈 수 있다.

### 6. 파일 확장자
#### 이미지
    .bmp : 윈도우에서 사용되는 기본 이미지 형식(bitmap)
    .gif : 움짤
    .jpeg / .jpg : 카메라나 핸드폰 촬영 결과물
    .png : 휴대용 기기 및 네트워크 환경에 최적화된 그림파일
    .psd : 포토샵 작업 파일 형식

#### 음성, 동영상
    .avi : 마이크로소프트에서 만든 동영상 파일 형식
    .mkv : 마트로스카(Matroska) 형식으로 저장된 동영상 파일
    .mov : 애플사에서 만든 동영상 파일 형식
    .mp3 : MPEG-3 규격에 의해 압축된 음성 파일
    .mp4 : MPEG-4 규격으로 압축된 동영상, 음악파일 (휴대용 기기를 위해 만들어짐)
    .wav : 파형(Wave) 음성 데이터를 압축하지 않은 상태로 저장한 파일
    .wma : 마이크로 소프트가 개발한 음성 파일 형식

#### 문서
    .doc / .docx : MS-Word 문서 파일
    .ppt / .pptx : 파워포인트 문서 파일
    .xls / .xlsx : 엑셀 문서 파일
    .hwp : 아래아 한글 문서 파일
    .html : 웹 페이지 문서 파일
    .pdf : 어도비 아크로벳 문서 파일
    .txt : 문자 및 기호로만 이루어진 가장 기본적인 문서파일

#### 기타 파일 
    .zip / .7z / .rar /.7zip : 압축파일
    .tar.gz : 리눅스에서 사용되는 압축파일
    .exe : 윈도우용 실행 파일
    .msi : 마이크로소프트 인스톨러
#### 가상 CD
    .iso
    .dmg
#### 파일 확장자 표시하기
##### 윈도우
    폴더 탭 부분에 보기 > 파일 확장명 체크

##### 맥
    Finder 환경 설정 > 고급 > 모든 파일 확장자 보기 선택

...

## 02. 개발환경 지원 (Git)

### 1. Git을 사용하는데 필요한 프로그램 설치

#### 1) 윈도우
    git-scm 다운로드
#### 2) 맥
    응용 프로그램 > 유틸리티 > 터미널 실행 > xcode-select --install
#### 3> Window, Mac 공통
    git config --global user.name "Youer Name"
    git config --global user.email "You@Your-domain.com"
    git config --global core.precomposeunicode true
    git config --global core.quotepath false

### 2. SSH-key 생성
    터미널에 ssh-keygen 입력
    나오는대로 입력하고 비밀번호는 엔터로 넘어갈 수 있다.

### 3. SSH-key를 git에 등록
    id_rsa.pub 을 text 파일로 열거나 VScode 로 열어서 안의 내용을 복사 후,
    github setting에 들어가 SSH and GPG key에 복사하여 등록한다.

### 4. 저장소 생성
    + 버튼을 눌러 NEw repository를 클릭하거나,
    홈페이지에서 Repositories 옆에 New 버튼을 눌러서 Repository name 을 입력하고 공개/비공개 설정후 생성하면 된다.

### 5. 저장소 클론
    생성한 클론을 클릭하여 code 버튼을 누르면 Clone 창이 열린다. 
    HTTPS, SSH, GitHub CLI 중 SSH 를 복사하여 터미널에 git clone 복사한 주소를 입력하면 된다.

### 6. 내 컴퓨터에서 Git으로 보내기
    내용을 변경하여 Git에 저장하고 싶다면
    터미널에서 cd repository_name
    git add --all 또는
    입력 후
    git commint -m "간단한 설명"
    을 적은 후에 
    git push origin branch_name 
    을 입력하면 된다.

### 7. Git에서 내 컴퓨터로 내려받기
    Git에서 내 컴퓨터로 받고싶다면,
    git pull origin branch_name
    하면된다.