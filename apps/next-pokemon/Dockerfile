FROM node:lts-alpine
# Where is the app stored in the container
WORKDIR /app

# Set production environment
ENV NODE_ENV production

# The port that we want to run in the container
# Google Cloud Run and others override this
# So it might be better to remove it
ENV PORT 3334
# Expose the port so that we can reach the app
EXPOSE ${PORT}

# Copy the package.json only
COPY package.json ./

# For some reason that I don't know I'm getting SLEF_SIGNED_CERT_IN_CHAIN error
# This is to bypass it
RUN npm config set registry="http://registry.npmjs.org/"

# Install dependencies, but skip devDependencies
# By running npm install in it's own layer, it will be cached
# So next time if we only change something in the app and not in package.json, docker will only
# create a new layer with the few new kb that is the app, saving a lot of registry storage
RUN npm install --production

# When generating the package.json using generatePackageJson
# It does not copy dependencies that are not specified in imports
# This is why we need to add them here
# RUN npm install reflect-metadata tslib rxjs @nestjs/platform-express --production
# RUN npm install --verbose @nrwl/next @nrwl/workspace @testing-library/react --production

# Copy the built app into /app in the container
COPY ./dist/apps/next-pokemon .

# add package httpie to use REST via cli
RUN apk add httpie
RUN apk add vim

# CMD ["node"]
CMD ["npm", "run", "start", "--", "-p", "3334"]

# RUN npm install --verbose  --ignore-scripts --prefer-offline
# ENV API=http://localhost:3333
# RUN apk add httpie
# CMD npm run start -- -p 3334