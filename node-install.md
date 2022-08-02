## Python3 Installation

### Mac

 주로 개발 환경이 될 것이다. Python3와 Virtual Environments 구성으로 파이썬 개발환경을 구성하는 것이 베스트이다. 맥에는 Python2.7이 이미 설치되어 있지만 공식 파이썬과 완전 다르며 맥 전용 라이브러리도 포함되어 있다. 공식 Python2.7과 호환에 문제가 있다. 따라서 Python2.7 또는 Pythom 3.x 설치해 개발할 때에는 정식 배포판 설치를 추천한다. Homebrew를 사용하면 쉽게 설치할 수 있다.

1.	3.x 설치

	```sh
	brew install python3
	python3 --version

	Python 3.8.5
	```
	
	기본 설치 위치는 /usr/local/Cellar/python3 이다.


2.	2.x 설치

	```sh
	brew install python

	```
	 
	기본 설치 위치는 /usr/local/Cellar/python 이다.


3.	pip3(Python3) 업그레이드
	
	```sh
	pip3 install --upgrade pip
	
	Requirement already up-to-date: pip in /usr/local/lib/python3.8/site-packages (20.1.1)
	
	```
	python3과 함께 설치되는 파이썬 패키지 설치 및 관리 도구인 pip 업그레이드 한다.


### Linux(CentOS)
 주로 배포된 파이썬 애플리케이션의 실행환경을 구축한다. CentOS에는 yum(Yellow dog Updater, Modified)이라는 RPM 기반의 레드햇 패키지 설치/업데이트/제거 도구가 있는데 Python 2.X로 작성되어 있다. 따라서 CentOS에는 Python2.x가 이미 설치되어 있다. Python2.x를 제거하고 Python3를 새로 설치하면 Python2.x와 Python3.x는 호환되지 않기 때문에 yum이 작동되지 않는다. 이는 CenOS 서버 운용에 문제를 발생시킬 수 있기 때문에 보통 CenOS에서는 Python3.x를 따로 설치한다. python로 Python3를 실행하고 싶겠지만, 이 시도도 yum 실행에 문제를 발생시킨다. Python3 실행은 python3로 하는 것이 보통이다.

1.	의존성 라이브러리 설치 및 설정

	```sh
	yum install -y openssl
	yum install -y openssl-devel
	yum install -y bzip2-devel
	yum install -y sqlite-devel
	yum install -y zlib-devel
	yum install -y libffi-devel
	
	```
	yum을 사용하여 다음 라이브러리를 차례로 설치한다.

2.	libressl 설치

	-	소스 컴파일 및 설치

		```sh
		wget https://ftp.openbsd.org/pub/OpenBSD/LibreSSL/libressl-2.9.2.tar.gz
		tar xvfz libressl-2.9.2.tar.gz 
		cd libressl-2.9.2
		
		./configure --prefix=/usr/local/ssl
		make
		make install
		```

	-	공유 라이브러리 캐시 설정(/etc/ld.so.conf.d/ssl.conf)

		```sh
		vi /etc/ld.so.conf.d/ssl.conf
		```

	-	ssl.conf 내용

		```sh
		/usr/local/ssl/lib
		```

	-	ldconfig 실행 및 확인

		```bash
		ldconfig -v | grep ssl
		
		/usr/local/ssl/lib:
			libssl.so.47 -> libssl.so.47.0.5
			libssl.so.10 -> libssl.so.1.0.2k
			libssl3.so -> libssl3.so
		```

3.	설치

	파이썬 소스를 다운로드 받아 컴파일 설치하는 것은 비교적 쉽다. 설치 위치는 /usr/local/kickscar/python3.7.6 이고 라이브러는 공유 라이브러리로 설치하였기 때문에 앞의 libssl과 마찬가지로 공유 라이브러리 캐시 설정을 한다.

	-	소스 컴파일 및 설치
		
	```sh
	wget https://www.python.org/ftp/python/3.7.6/Python-3.7.6.tgz
	tar xvfz Python-3.7.6.tgz 
	cd Python-3.7.6

	./configure --prefix=/usr/local/kickscar/python3.7.6 --with-openssl=/usr/local/ssl --enable-shared
	make
	make install
	```

	-	공유 라이브러리 캐시 설정(/etc/ld.so.conf.d/python.conf)

		```sh
		vi /etc/ld.so.conf.d/python.conf
		
		```

	-	python.conf 내용

		```sh
		/usr/local/kickscar/python3.7.6/lib
		```

	-	ldconfig 실행 및 확인

		```sh
		ldconfig -v | grep python
		
		/usr/local/kickscar/python3.7.6/lib:
			libpython3.so -> libpython3.so
			libpython3.7m.so.1.0 -> libpython3.7m.so.1.0
			libpython2.7.so.1.0 -> libpython2.7.so.1.0

		```

4.	설정

	-	설치 디렉토리 링크 및 PATH 설정

		```sh
		ln -s /etc/usr/kickscar/python3.7.6 /etc/usr/kickscar/python
		```

	-	/etc/profile 수정

		```sh
		# python
		export PATH=$PATH:/usr/local/kickscar/python/bin
		
		```

	-	설정 적용 및 확인

		```bash
		source /etc/profile
		python3 --version
		
		Python 3.7.6
		```
    
## Node Installation

### Mac OS
 Mac에서의 Node는 대부분이 개발 환경을 위해서 설치될 것이다. 여러 버젼의 Node에서 개발할 경우 여러 버젼의 Node를 설치하고 개발 환경에 적용하는 것은 꽤 번거로운 작업이다. nvm은 이를 해결해 주는 굉장히 유용한 도구다. nvm을 설치하여 여러 버젼의 노드를 설치하도록 한다. 이는 Node 애플리케이션 운용 환경(주로 리눅스 또는 도커)에서 유용하다.

1.	설치된 Node 완전 제거하기

	```sh
	sudo npm uninstall npm -g
	sudo rm -rf /usr/local/lib/node
	sudo rm -rf /usr/local/lib/node_modules
    sudo rm -rf /var/db/receipts/org.nodejs.*
    sudo rm -rf /usr/local/include/node
    sudo rm -rf /usr/local/bin/node
    sudo rm -f  /usr/local/share/man/man1/node.1
    sudo rm -f  /usr/local/lib/dtrace/node.d
    sudo rm -f  /usr/local/bin/npm
    sudo rm -f  /opt/local/include/node
    sudo rm -rf /opt/local/lib/node_modules
    sudo rm -rf ~/.npm
    sudo rm -rf ~/.node-gyp
	
    brew uninstall node
    ```

2.	nvm(Node Version Manager) 설치
	여러 버전의 노드에서 실행되는 코드를 작성해야 할 필요성이 반드시 생기기 때문에 nvm을 사용하여 설치하도록 한다.
	
    ```sh
    curl https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
    source ~/.profile (mac)
    source ~/.bashrc  (centos)
    
	nvm --version
    
	0.33.8
    ```

3.	node 설치

	+ 안정 버젼 설치
     ```sh
     nvm install stable
     ```

   + 최신 버젼 설치

     ```sh
     nvm install node
     ```

   + 특정 버젼(v12.12.0) 설치

     ```sh
     $ nvm install v12.12.0
     ```

   + node 설치 버젼 확인하기

     ```sh
     nvm ls
            v12.12.0
     ->     v13.7.0
	 
     default -> node (-> v13.7.0)
     node -> stable (-> v13.7.0) (default)
     stable -> 13.7 (-> v13.7.0) (default)
     iojs -> N/A (default)
     lts/* -> lts/erbium (-> N/A)
     lts/argon -> v4.9.1 (-> N/A)
     lts/boron -> v6.17.1 (-> N/A)
     lts/carbon -> v8.17.0 (-> N/A)
     lts/dubnium -> v10.18.1 (-> N/A)
     lts/erbium -> v12.14.1 (-> N/A)

     ```

   + node 특정 버젼(v12.12.0) 사용하기

     ```sh
     nvm use v12.12.0
     Now using node v12.12.0 (npm v6.11.3)
     
	 node -v
     v12.12.0
     ```

   + node 최신 버젼 사용하기

     ```sh
     nvm use node
     Now using node v13.7.0 (npm v6.13.6)
     
	 node -v
     v13.7.0
     
     ```

### 리눅스(CentOS)
 특정 버젼의 Node 애플리케이션만 운용하는 서버 환경이라면 특정 버젼의 Node만 소스 컴파일 설치하고 애플리케이션을 운용하면 베스트 일 것이다. Linux(CentOS) 에서 Node를 소스 컴파일 설치를 한다. 설치를 위해서는 Python3(정확히, 공유 라이브러리)가 설치되어 있어야 한다. 그리고 V8 엔진 컴파일을 위해 g++ 7.x 버젼이 필요하다. CentOS RPM 설치는 4.x까지 지원하기 때문에 별도로 설치와 설정을 해야 한다.

1.	g++ 7.x 설치 및 설치

    ```sh
    g++ --version
    
	g++ (GCC) 4.8.5 20150623 (Red Hat 4.8.5-39)
    Copyright (C) 2015 Free Software Foundation, Inc.
    
    yum install centos-release-scl
    yum install devtoolset-7-gcc*
    scl enable devtoolset-7 bash
    
	g++ --version
    
	Thread model: posix
    gcc version 7.3.1 20180303 (Red Hat 7.3.1-5) (GCC)
    
    ```

2.	설치
    v14.4.0을 설치할 것이다. /usr/local/kickscar/node-v14.4.0에 설치할 것이다.

    ```sh
    wget https://nodejs.org/dist/v14.4.0/node-v14.4.0.tar.gz
    tar xvfz node-v14.4.0.tar.gz
    
	cd node-v14.4.0
	./configure --prefix=/usr/local/kickscar/node-v14.4.0
    make && make install
	
    ```

3.	링크 작업

    ```sh
    ln -s /usr/local/kickscar/node-v14.4.0 /usr/local/kickscar/node
	
    ```

4.	PATH 설정 (/etc/profile)

    ```sh
    # node 
    export PATH=$PATH:/usr/local/kickscar/node/bin
    ```

5.	설정 적용 및 설치 확인

    ```sh
    source /etc/profile
    node --version
    
	v14.3.0
    ```
