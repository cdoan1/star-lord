IMAGE_NAME = star-lord

default: test

build-prod:
	docker build -f Dockerfile-prod -t $(IMAGE_NAME):prod .

.PHONY: release
release: build-prod
	docker run -d -p 80:80 --rm $(IMAGE_NAME):prod

.PHONY: build
build:
	docker build -f Dockerfile -t $(IMAGE_NAME) .

.PHONY:
stop:
	docker stop $$(docker ps -a | grep star-lord | awk '{print $$1}') || true

.PHONY: test
test: build
	docker stop $$(docker ps | grep star-lord | awk '{print $$1}') || true
	docker run -d \
	-v ${PWD}:/usr/src/app \
	-v /usr/src/app/node_modules \
	-p 3000:3000 \
	--rm $(IMAGE_NAME)
