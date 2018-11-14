IMAGE_NAME = star-lord

default: build

build-prod:
	docker build -f Dockerfile-prod -t $(IMAGE_NAME):prod .

.PHONY: release
release: build-prod
	docker run -d -p 80:80 --rm $(IMAGE_NAME):prod

.PHONY: build
build:
	docker build -f Dockerfile -t $(IMAGE_NAME) .

.PHONY: test
test: build
	docker run -d \
	-v ${PWD}:/usr/src/app \
	-v /usr/src/app/node_modules \
	-p 3000:3000 \
	--rm $(IMAGE_NAME)