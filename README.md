# Angular Skeleton

Angular Skeleton is a project template that provides a basic Angular application setup, utilizing Docker for both development.

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine
- [Docker Compose](https://docs.docker.com/compose/install/) installed on your machine

## Development

1. Clone this repository:

```bash
git clone https://github.com/your-username/angular-skeleton.git
cd angular-skeleton
```
   
2. Start the development environment:

```bash
docker-compose up -d
```

Open your browser and navigate to http://localhost:4200. The Angular application should be running with hot-reloading enabled. Any changes you make to the source code will automatically update the running application.

To stop the development environment, run:

```bash
docker-compose down
```