IMAGE_NAME = star-lord

default: test

release:
	docker build -f Dockerfile-prod -t $(IMAGE_NAME):prod .

test-release: release
	docker run -d -p 80:80 --rm $(IMAGE_NAME):prod

build:
	docker build -f Dockerfile -t $(IMAGE_NAME) .

test: build
	docker run -d \
	-v ${PWD}:/usr/src/app \
	-v /usr/src/app/node_modules \
	-p 3000:3000 \
	--rm $(IMAGE_NAME)