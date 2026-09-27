import { onRequestDelete as __api_articles__id__js_onRequestDelete } from "/home/orcun/yeni-yolculuk/functions/api/articles/[id].js"
import { onRequestGet as __api_articles__id__js_onRequestGet } from "/home/orcun/yeni-yolculuk/functions/api/articles/[id].js"
import { onRequestPut as __api_articles__id__js_onRequestPut } from "/home/orcun/yeni-yolculuk/functions/api/articles/[id].js"
import { onRequestDelete as __api_publications__id__js_onRequestDelete } from "/home/orcun/yeni-yolculuk/functions/api/publications/[id].js"
import { onRequestGet as __api_publications__id__js_onRequestGet } from "/home/orcun/yeni-yolculuk/functions/api/publications/[id].js"
import { onRequestDelete as __api_articles_index_js_onRequestDelete } from "/home/orcun/yeni-yolculuk/functions/api/articles/index.js"
import { onRequestGet as __api_articles_index_js_onRequestGet } from "/home/orcun/yeni-yolculuk/functions/api/articles/index.js"
import { onRequestPost as __api_articles_index_js_onRequestPost } from "/home/orcun/yeni-yolculuk/functions/api/articles/index.js"
import { onRequestPut as __api_articles_index_js_onRequestPut } from "/home/orcun/yeni-yolculuk/functions/api/articles/index.js"
import { onRequestGet as __api_auth_index_js_onRequestGet } from "/home/orcun/yeni-yolculuk/functions/api/auth/index.js"
import { onRequestPost as __api_auth_index_js_onRequestPost } from "/home/orcun/yeni-yolculuk/functions/api/auth/index.js"
import { onRequestPut as __api_auth_index_js_onRequestPut } from "/home/orcun/yeni-yolculuk/functions/api/auth/index.js"
import { onRequestGet as __api_categories_index_js_onRequestGet } from "/home/orcun/yeni-yolculuk/functions/api/categories/index.js"
import { onRequestPost as __api_categories_index_js_onRequestPost } from "/home/orcun/yeni-yolculuk/functions/api/categories/index.js"
import { onRequestPut as __api_categories_index_js_onRequestPut } from "/home/orcun/yeni-yolculuk/functions/api/categories/index.js"
import { onRequestDelete as __api_publications_index_js_onRequestDelete } from "/home/orcun/yeni-yolculuk/functions/api/publications/index.js"
import { onRequestGet as __api_publications_index_js_onRequestGet } from "/home/orcun/yeni-yolculuk/functions/api/publications/index.js"
import { onRequestPost as __api_publications_index_js_onRequestPost } from "/home/orcun/yeni-yolculuk/functions/api/publications/index.js"
import { onRequestPut as __api_publications_index_js_onRequestPut } from "/home/orcun/yeni-yolculuk/functions/api/publications/index.js"
import { onRequestDelete as __api_roadmap_index_js_onRequestDelete } from "/home/orcun/yeni-yolculuk/functions/api/roadmap/index.js"
import { onRequestGet as __api_roadmap_index_js_onRequestGet } from "/home/orcun/yeni-yolculuk/functions/api/roadmap/index.js"
import { onRequestPost as __api_roadmap_index_js_onRequestPost } from "/home/orcun/yeni-yolculuk/functions/api/roadmap/index.js"
import { onRequestPut as __api_roadmap_index_js_onRequestPut } from "/home/orcun/yeni-yolculuk/functions/api/roadmap/index.js"
import { onRequestGet as __api_settings_index_js_onRequestGet } from "/home/orcun/yeni-yolculuk/functions/api/settings/index.js"
import { onRequestPut as __api_settings_index_js_onRequestPut } from "/home/orcun/yeni-yolculuk/functions/api/settings/index.js"
import { onRequestPost as __api_share_index_js_onRequestPost } from "/home/orcun/yeni-yolculuk/functions/api/share/index.js"
import { onRequestGet as __api_stats_index_js_onRequestGet } from "/home/orcun/yeni-yolculuk/functions/api/stats/index.js"
import { onRequestGet as __og_image_index_js_onRequestGet } from "/home/orcun/yeni-yolculuk/functions/og-image/index.js"
import { onRequest as ___middleware_js_onRequest } from "/home/orcun/yeni-yolculuk/functions/_middleware.js"

export const routes = [
    {
      routePath: "/api/articles/:id",
      mountPath: "/api/articles",
      method: "DELETE",
      middlewares: [],
      modules: [__api_articles__id__js_onRequestDelete],
    },
  {
      routePath: "/api/articles/:id",
      mountPath: "/api/articles",
      method: "GET",
      middlewares: [],
      modules: [__api_articles__id__js_onRequestGet],
    },
  {
      routePath: "/api/articles/:id",
      mountPath: "/api/articles",
      method: "PUT",
      middlewares: [],
      modules: [__api_articles__id__js_onRequestPut],
    },
  {
      routePath: "/api/publications/:id",
      mountPath: "/api/publications",
      method: "DELETE",
      middlewares: [],
      modules: [__api_publications__id__js_onRequestDelete],
    },
  {
      routePath: "/api/publications/:id",
      mountPath: "/api/publications",
      method: "GET",
      middlewares: [],
      modules: [__api_publications__id__js_onRequestGet],
    },
  {
      routePath: "/api/articles",
      mountPath: "/api/articles",
      method: "DELETE",
      middlewares: [],
      modules: [__api_articles_index_js_onRequestDelete],
    },
  {
      routePath: "/api/articles",
      mountPath: "/api/articles",
      method: "GET",
      middlewares: [],
      modules: [__api_articles_index_js_onRequestGet],
    },
  {
      routePath: "/api/articles",
      mountPath: "/api/articles",
      method: "POST",
      middlewares: [],
      modules: [__api_articles_index_js_onRequestPost],
    },
  {
      routePath: "/api/articles",
      mountPath: "/api/articles",
      method: "PUT",
      middlewares: [],
      modules: [__api_articles_index_js_onRequestPut],
    },
  {
      routePath: "/api/auth",
      mountPath: "/api/auth",
      method: "GET",
      middlewares: [],
      modules: [__api_auth_index_js_onRequestGet],
    },
  {
      routePath: "/api/auth",
      mountPath: "/api/auth",
      method: "POST",
      middlewares: [],
      modules: [__api_auth_index_js_onRequestPost],
    },
  {
      routePath: "/api/auth",
      mountPath: "/api/auth",
      method: "PUT",
      middlewares: [],
      modules: [__api_auth_index_js_onRequestPut],
    },
  {
      routePath: "/api/categories",
      mountPath: "/api/categories",
      method: "GET",
      middlewares: [],
      modules: [__api_categories_index_js_onRequestGet],
    },
  {
      routePath: "/api/categories",
      mountPath: "/api/categories",
      method: "POST",
      middlewares: [],
      modules: [__api_categories_index_js_onRequestPost],
    },
  {
      routePath: "/api/categories",
      mountPath: "/api/categories",
      method: "PUT",
      middlewares: [],
      modules: [__api_categories_index_js_onRequestPut],
    },
  {
      routePath: "/api/publications",
      mountPath: "/api/publications",
      method: "DELETE",
      middlewares: [],
      modules: [__api_publications_index_js_onRequestDelete],
    },
  {
      routePath: "/api/publications",
      mountPath: "/api/publications",
      method: "GET",
      middlewares: [],
      modules: [__api_publications_index_js_onRequestGet],
    },
  {
      routePath: "/api/publications",
      mountPath: "/api/publications",
      method: "POST",
      middlewares: [],
      modules: [__api_publications_index_js_onRequestPost],
    },
  {
      routePath: "/api/publications",
      mountPath: "/api/publications",
      method: "PUT",
      middlewares: [],
      modules: [__api_publications_index_js_onRequestPut],
    },
  {
      routePath: "/api/roadmap",
      mountPath: "/api/roadmap",
      method: "DELETE",
      middlewares: [],
      modules: [__api_roadmap_index_js_onRequestDelete],
    },
  {
      routePath: "/api/roadmap",
      mountPath: "/api/roadmap",
      method: "GET",
      middlewares: [],
      modules: [__api_roadmap_index_js_onRequestGet],
    },
  {
      routePath: "/api/roadmap",
      mountPath: "/api/roadmap",
      method: "POST",
      middlewares: [],
      modules: [__api_roadmap_index_js_onRequestPost],
    },
  {
      routePath: "/api/roadmap",
      mountPath: "/api/roadmap",
      method: "PUT",
      middlewares: [],
      modules: [__api_roadmap_index_js_onRequestPut],
    },
  {
      routePath: "/api/settings",
      mountPath: "/api/settings",
      method: "GET",
      middlewares: [],
      modules: [__api_settings_index_js_onRequestGet],
    },
  {
      routePath: "/api/settings",
      mountPath: "/api/settings",
      method: "PUT",
      middlewares: [],
      modules: [__api_settings_index_js_onRequestPut],
    },
  {
      routePath: "/api/share",
      mountPath: "/api/share",
      method: "POST",
      middlewares: [],
      modules: [__api_share_index_js_onRequestPost],
    },
  {
      routePath: "/api/stats",
      mountPath: "/api/stats",
      method: "GET",
      middlewares: [],
      modules: [__api_stats_index_js_onRequestGet],
    },
  {
      routePath: "/og-image",
      mountPath: "/og-image",
      method: "GET",
      middlewares: [],
      modules: [__og_image_index_js_onRequestGet],
    },
  {
      routePath: "/",
      mountPath: "/",
      method: "",
      middlewares: [___middleware_js_onRequest],
      modules: [],
    },
  ]