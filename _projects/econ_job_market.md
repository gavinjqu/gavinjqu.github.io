---
layout: page
title: EconJobMarket Placement Database
description: Scrapes and structures economics PhD placement data from 75 top US programs (1987–2025) into a versioned, queryable SQLite database for analyzing hiring trends and sector breakdowns.
img:
importance: 3
category: data-science
github: https://github.com/gavinjqu/EconJobMarket
---

A 3-layer (raw → staging → core) SQLite pipeline built with Python and BeautifulSoup, covering placement outcomes across universities and years for economics PhD graduates. The schema distinguishes PhD-granting programs from universities, and an audit trail records human-verified corrections. Queryable directly with no setup required.
