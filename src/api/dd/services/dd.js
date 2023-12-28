'use strict';

/**
 * dd service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dd.dd');
