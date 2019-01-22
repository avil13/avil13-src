import { IListItem } from '~/store';

export const icons: string[] = [
    'bash',
    'go',
    'gulp',
    'jquery',
    'mysql',
    'nodejs',
    'php',
    'vue',
    'webpack'
];

const items: IListItem[] = [
    {
        name: 'vue-sweetalert2',
        description: 'A convenient VueJS wrapper for sweetalert2.',
        tags: ['vue', 'sweatalert2', 'ssr'],
        image:
            'https://raw.githubusercontent.com/avil13/vue-sweetalert2/master/assets/logo.png',
        url: 'https://github.com/avil13/vue-sweetalert2',
        demoUrl: 'https://avil13.github.io/vue-sweetalert2/'
    },
    {
        name: 'custom-pwa-webpack-plugin',
        description:
            'A webpack plugin to help you create your Progressive Web Apps.',
        tags: ['webpack', 'pwa', 'nodejs'],
        image:
            'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOTgwcHgi%0D%0AIGhlaWdodD0iMjU3cHgiIHZpZXdCb3g9IjAgMCA5ODAgMjU3IiB2ZXJzaW9uPSIxLjEiIHhtbG5z%0D%0APSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMu%0D%0Ab3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MS4yICg1NzUxOSkg%0D%0ALSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+QXJ0%0D%0AYm9hcmQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8%0D%0AZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdp%0D%0AZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJ3%0D%0AZWJwYWNrLWxvZ28tb24td2hpdGUtYmciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2OC4wMDAwMDAs%0D%0AIDU3LjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlk%0D%0APSJTaGFwZSIgZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSI2OS40NjgzODk3IDAgMTM4LjkzNjc3OSAz%0D%0ANS45OTU4ODkgMTM4LjkzNjc3OSAxMDguMDA0MTExIDY5LjQ2ODM4OTcgMTQ0IDAgMTA4LjAwNDEx%0D%0AMSAwIDM1Ljk5NTg4OSI+PC9wb2x5Z29uPgogICAgICAgICAgICA8cGF0aCBkPSJNMTI2LjQzNzk2%0D%0ANCwxMDUuMzkzODEgTDcxLjY3MDM2MjksMTMzLjc1NDIwNCBMNzEuNjcwMzYyOSwxMTEuNjcwNTYg%0D%0ATDEwNS43OTQ2NTMsOTQuNDgzNDM4OCBMMTI2LjQzNzk2NCwxMDUuMzkzODEgWiBNMTMwLjE4OTY2%0D%0AMiwxMDIuMjg4Mjk4IEwxMzAuMTg5NjYyLDQyLjk4Nzc5ODkgTDExMC4xNTY2NzUsNTMuNTg1OTc2%0D%0AMiBMMTEwLjE1NjY3NSw5MS43MDY1NTIgTDEzMC4xODk2NjIsMTAyLjI4ODI5OCBaIE0xMi4wOTE5%0D%0ANzI2LDEwNS4zOTM4MSBMNjYuODU5NTczOSwxMzMuNzU0MjA0IEw2Ni44NTk1NzM5LDExMS42NzA1%0D%0ANiBMMzIuNzE3MzMyOCw5NC40ODM0Mzg4IEwxMi4wOTE5NzI2LDEwNS4zOTM4MSBaIE04LjM0MDI3%0D%0ANTIsMTAyLjI4ODI5OCBMOC4zNDAyNzUyLDQyLjk4Nzc5ODkgTDI4LjM3MzI2MjEsNTMuNTg1OTc2%0D%0AMiBMMjguMzczMjYyMSw5MS43MDY1NTIgTDguMzQwMjc1MiwxMDIuMjg4Mjk4IFogTTEwLjY5MTgx%0D%0ANzYsMzkuMTQyODc4NyBMNjYuODU5NTczOSwxMC4wNTk1MDg0IEw2Ni44NTk1NzM5LDMxLjQwMzc0%0D%0ANDYgTDMwLjg2ODQxMDEsNDkuNTI3NDQ5NCBMMzAuNTgxMTk4OCw0OS42NzUzMzA5IEwxMC42OTE4%0D%0AMTc2LDM5LjE0Mjg3ODcgWiBNMTI3LjgzODExOSwzOS4xNDI4Nzg3IEw3MS42NzAzNjI5LDEwLjA1%0D%0AOTUwODQgTDcxLjY3MDM2MjksMzEuNDAzNzQ0NiBMMTA3LjY2MTUyNyw0OS41MTEwMTgxIEwxMDcu%0D%0AOTQ4NzM4LDQ5LjY1ODg5OTcgTDEyNy44MzgxMTksMzkuMTQyODc4NyBaIiBpZD0iU2hhcGUiIGZp%0D%0AbGw9IiM4RUQ2RkIiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTY3LjA2MTIzNzEsMTA2%0D%0ALjU1NjI3NCBMMzMuMzYxMTAwOCw4OS42MTM5OTg0IEwzMy4zNjExMDA4LDU2LjA3NDIwMjQgTDY3%0D%0ALjA2MTIzNzEsNzMuODUzNzQxOSBMNjcuMDYxMjM3MSwxMDYuNTU2Mjc0IFogTTcxLjg3NTU0MjMs%0D%0AMTA2LjU1NjI3NCBMMTA1LjU3NTY3OSw4OS42MzA0MTU0IEwxMDUuNTc1Njc5LDU2LjA3NDIwMjQg%0D%0ATDcxLjg3NTU0MjMsNzMuODUzNzQxOSBMNzEuODc1NTQyMywxMDYuNTU2Mjc0IFogTTM1LjY0MjUw%0D%0ANjYsNTIuMTk5ODA2IEw2OS40NjgzODk3LDM1LjIwODI3OTQgTDEwMy4yOTQyNzMsNTIuMTk5ODA2%0D%0AIEw2OS40NjgzODk3LDcwLjA0NTAxMzIgTDM1LjY0MjUwNjYsNTIuMTk5ODA2IFoiIGlkPSJTaGFw%0D%0AZSIgZmlsbD0iIzFDNzhDMCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjA5LjA5Nzcw%0D%0AOSw5NC43NTI0ODIgTDIyMy45MDY5NjMsOTQuNzUyNDgyIEwyMzkuMDAzNDI2LDQ4LjcyMDkwMTQg%0D%0ATDIyNC41NzExMzUsNDguNzIwOTAxNCBMMjE1LjYzMTczMSw4MS4zNzk5OTU3IEwyMDYuMDk5OTU3%0D%0ALDQ4LjcyMDkwMTQgTDE5My42MDYzMzIsNDguNzIwOTAxNCBMMTgzLjk4NDgwNSw4MS4zNzk5OTU3%0D%0AIEwxNzUuMTM1MTU0LDQ4LjcyMDkwMTQgTDE2MC43MDI4NjQsNDguNzIwOTAxNCBMMTc1LjcwOTU3%0D%0ANCw5NC43NTI0ODIgTDE5MC41MTg4MjcsOTQuNzUyNDgyIEwxOTkuODUzMTQ1LDY1LjI2NDAxNCBM%0D%0AMjA5LjA5NzcwOSw5NC43NTI0ODIgWiBNMjM5Ljc3NTMwMiw3MS44NjgxMTY2IEMyMzkuNzc1MzAy%0D%0ALDg1LjY4NDE2MiAyNTAuMDYxMDAyLDk1LjkwMjQ1MDEgMjY2LjIzNDUwMiw5NS45MDI0NTAxIEMy%0D%0ANzguNzQ2MDc4LDk1LjkwMjQ1MDEgMjg1LjQ3NzU1Nyw4OS4wMzU0OTc3IDI4Ny4zOTgyNzIsODUu%0D%0ANzgyNzMwNyBMMjc4LjYzODM3NCw3OS43MDQzMjc5IEMyNzcuMjAyMzI1LDgxLjY0Mjg0NTUgMjcz%0D%0ALjI1MzE5MSw4NS4zMzkxNzE2IDI2Ni40MTQwMDgsODUuMzM5MTcxNiBDMjU5LjAwMDQwNiw4NS4z%0D%0AMzkxNzE2IDI1My42MTUyMjMsODAuOTM2NDM2NiAyNTMuMzI4MDEzLDc0Ljc3NTg5MzEgTDI4OC43%0D%0ANDQ1NjgsNzQuNzc1ODkzMSBDMjg4LjgzNDMyMSw3My44ODg3NzQ5IDI4OC44MzQzMjEsNzMuMDE4%0D%0AMDg0NyAyODguODM0MzIxLDcyLjEzMDk2NjUgQzI4OC44MzQzMjEsNTcuMDgyODEyMyAyNzkuOTg0%0D%0ANjcsNDcuNTcwOTMzMyAyNjQuNDAzNTQsNDcuNTcwOTMzMyBDMjUwLjA2MTAwMiw0Ny41NzA5MzMz%0D%0AIDIzOS43NzUzMDIsNTcuOTUzNTAyNSAyMzkuNzc1MzAyLDcxLjg2ODExNjYgWiBNMjUzLjcyMjky%0D%0ANyw2Ni44NDExMTMyIEMyNTQuMjk3MzQ2LDYxLjU2NzY4OCAyNTguMzM2MjM0LDU3LjUwOTk0MzQg%0D%0AMjY0LjYwMDk5Nyw1Ny41MDk5NDM0IEMyNzAuNjY4MzAzLDU3LjUwOTk0MzQgMjc1LjA4NDE1Myw2%0D%0AMS4yMDYyNjk0IDI3NS4zNzEzNjMsNjYuODQxMTEzMiBMMjUzLjcyMjkyNyw2Ni44NDExMTMyIFog%0D%0ATTI5My44NDI1NDEsOTQuNzUyNDgyIEwzMDYuMzU0MTE3LDk0Ljc1MjQ4MiBMMzA2LjM1NDExNyw5%0D%0AMC4wMDQ3NTY1IEMzMDcuNzAwNDEyLDkxLjQ5OTcxNTEgMzEyLjcwODYzMyw5NS45MDI0NTAxIDMy%0D%0AMS4yNzEwNzQsOTUuOTAyNDUwMSBDMzM1LjcwMzM2NSw5NS45MDI0NTAxIDM0NS44OTkzMTEsODUu%0D%0AOTYzNDQgMzQ1Ljg5OTMxMSw3MS43ODU5NzYgQzM0NS44OTkzMTEsNTcuNTI2MzcxNSAzMzYuNDc1%0D%0AMjQxLDQ3LjU4NzM2MTQgMzIyLjA0Mjk1LDQ3LjU4NzM2MTQgQzMxMy4zOTA3NTYsNDcuNTg3MzYx%0D%0ANCAzMDguMzgyNTM2LDUxLjk5MDA5NjQgMzA3LjEyNTk5Myw1My41NjcxOTU2IEwzMDcuMTI1OTkz%0D%0ALDMxLjEwOTk2MTIgTDI5My44NjA0OTIsMzEuMTA5OTYxMiBMMjkzLjg2MDQ5Miw5NC43NTI0ODIg%0D%0ATDI5My44NDI1NDEsOTQuNzUyNDgyIFogTTMwNi43MzEwNzksNzEuODY4MTE2NiBDMzA2LjczMTA3%0D%0AOSw2My4yNDMzNTU4IDMxMi4zMTM3MTksNTguMzE0OTIxIDMxOS42MTk2MTgsNTguMzE0OTIxIEMz%0D%0AMjcuMzIwNDMsNTguMzE0OTIxIDMzMi41MDgxNTYsNjMuODY3NjI0MiAzMzIuNTA4MTU2LDcxLjg2%0D%0AODExNjYgQzMzMi41MDgxNTYsODAuMDQ5MzE4MyAzMjcuMTIyOTczLDg1LjE1ODQ2MjMgMzE5LjYx%0D%0AOTYxOCw4NS4xNTg0NjIzIEMzMTEuNTQxODQzLDg1LjE1ODQ2MjMgMzA2LjczMTA3OSw3OS4xNjIy%0D%0AMDAxIDMwNi43MzEwNzksNzEuODY4MTE2NiBaIE0zNTEuMDY5MDg3LDExMS4yMTM0NTQgTDM2NC4z%0D%0AMzQ1ODgsMTExLjIxMzQ1NCBMMzY0LjMzNDU4OCw4OS45ODgzMjg0IEMzNjUuNTkxMTMxLDkxLjQ4%0D%0AMzI4NjkgMzcwLjU4MTQwMSw5NS44ODYwMjIgMzc5LjI1MTU0Niw5NS44ODYwMjIgQzM5My42ODM4%0D%0AMzYsOTUuODg2MDIyIDQwMy4xMDc5MDcsODUuOTQ3MDExOSA0MDMuMTA3OTA3LDcxLjY4NzQwNzMg%0D%0AQzQwMy4xMDc5MDcsNTcuNjA4NTEyMSAzOTIuOTExOTYsNDcuNTcwOTMzMyAzNzguNDc5NjY5LDQ3%0D%0ALjU3MDkzMzMgQzM2OS45MTcyMjgsNDcuNTcwOTMzMyAzNjQuOTA5MDA4LDUxLjk3MzY2ODMgMzYz%0D%0ALjU2MjcxMiw1My41NTA3Njc0IEwzNjMuNTYyNzEyLDQ4LjcwNDQ3MzMgTDM1MS4wNTExMzcsNDgu%0D%0ANzA0NDczMyBMMzUxLjA1MTEzNywxMTEuMjEzNDU0IEwzNTEuMDY5MDg3LDExMS4yMTM0NTQgWiBN%0D%0AMzYzLjk1NzYyNSw3MS42MDUyNjY4IEMzNjMuOTU3NjI1LDY0LjI5NDc1NTIgMzY4Ljc2ODM4OSw1%0D%0AOC4zMTQ5MjEgMzc2Ljg0NjE2NCw1OC4zMTQ5MjEgQzM4NC4zNDk1MTksNTguMzE0OTIxIDM4OS43%0D%0AMzQ3MDIsNjMuNDI0MDY1MSAzODkuNzM0NzAyLDcxLjYwNTI2NjggQzM4OS43MzQ3MDIsNzkuNjIy%0D%0AMTg3MyAzODQuNTQ2OTc2LDg1LjE1ODQ2MjMgMzc2Ljg0NjE2NCw4NS4xNTg0NjIzIEMzNjkuNTQw%0D%0AMjY1LDg1LjE1ODQ2MjMgMzYzLjk1NzYyNSw4MC4yMzAwMjc2IDM2My45NTc2MjUsNzEuNjA1MjY2%0D%0AOCBaIE00MDUuNTEzMjg5LDgwLjQ5Mjg3NzQgQzQwNS41MTMyODksOTAuMTY5MDM3NyA0MTQuMTY1%0D%0ANDgzLDk1LjkwMjQ1MDEgNDI0LjM2MTQzLDk1LjkwMjQ1MDEgQzQzMC4xNDE1MjYsOTUuOTAyNDUw%0D%0AMSA0MzMuOTgyOTU3LDk0LjMyNTM1MSA0MzYuNTg1Nzk1LDkxLjc2MjU2NDkgTDQzNy40NDc0MjUs%0D%0AOTQuNzUyNDgyIEw0NDkuMTg3MTI0LDk0Ljc1MjQ4MiBMNDQ5LjE4NzEyNCw2NS42MDkwMDQ1IEM0%0D%0ANDkuMTg3MTI0LDU1LjMwODU3NTggNDQ0LjM3NjM2LDQ3LjU3MDkzMzMgNDI4LjIyMDgxMSw0Ny41%0D%0ANzA5MzMzIEM0MjAuNTE5OTk5LDQ3LjU3MDkzMzMgNDEyLjkyNjg5MSw1MC4yMTU4NTk5IDQwOC40%0D%0AMDMzMzcsNTMuMDI1MDY3NyBMNDEzLjQxMTU1Nyw2MS4zMDQ4MzgxIEM0MTcuMTYzMjM1LDU5LjU0%0D%0ANzAyOTcgNDIxLjc3NjU0Miw1OC4wNTIwNzEyIDQyNi43ODQ3NjIsNTguMDUyMDcxMiBDNDMyLjY1%0D%0ANDYxMiw1OC4wNTIwNzEyIDQzNS45MjE2MjMsNjAuNzc5MTM4NCA0MzUuOTIxNjIzLDY0LjgzNjg4%0D%0AMyBMNDM1LjkyMTYyMyw2Ny44MjY4MDAxIEM0MzQuMDkwNjYsNjYuNjc2ODMyIDQzMC4xNDE1MjYs%0D%0ANjUuMjgwNDQyMiA0MjUuMDQzNTUzLDY1LjI4MDQ0MjIgQzQxMy4zMDM4NTQsNjUuMjY0MDE0IDQw%0D%0ANS41MTMyODksNzEuNDI0NTU3NSA0MDUuNTEzMjg5LDgwLjQ5Mjg3NzQgWiBNNDE4Ljc3ODc5LDgw%0D%0ALjEzMTQ1ODkgQzQxOC43Nzg3OSw3Ni4zNTI5OTIyIDQyMi4zMzMwMTEsNzMuNzA4MDY1NiA0Mjcu%0D%0ANDMwOTg0LDczLjcwODA2NTYgQzQzMi41Mjg5NTcsNzMuNzA4MDY1NiA0MzYuMTkwODgyLDc2LjA5%0D%0AMDE0MjQgNDM2LjE5MDg4Miw4MC4xMzE0NTg5IEM0MzYuMTkwODgyLDg0LjAwODQ5NDIgNDMyLjUy%0D%0AODk1Nyw4Ni40NzI3MTE2IDQyNy41Mzg2ODgsODYuNDcyNzExNiBDNDIyLjU0ODQxOCw4Ni40NzI3%0D%0AMTE2IDQxOC43Nzg3OSw4My45MjYzNTM2IDQxOC43Nzg3OSw4MC4xMzE0NTg5IFogTTQ4MS40MDg0%0D%0ANjksODUuMTU4NDYyMyBDNDczLjA0MzQ4NSw4NS4xNTg0NjIzIDQ2Ny4wODM4ODIsNzkuNjA1NzU5%0D%0AMiA0NjcuMDgzODgyLDcxLjc4NTk3NiBDNDY3LjA4Mzg4Miw2NC4zOTMzMjM5IDQ3Mi4zNzkzMTIs%0D%0ANTguMzE0OTIxIDQ4MC45NDE3NTQsNTguMzE0OTIxIEM0ODYuNjE0MTQ3LDU4LjMxNDkyMSA0OTAu%0D%0ANDczNTI4LDYwLjg2MTI3OSA0OTIuNjgxNDUzLDYyLjcxNzY1NjEgTDQ5Ni40MzMxMyw1Mi40OTkz%0D%0ANjggQzQ5My4xNjYxMTksNTAuMjE1ODU5OSA0ODcuOTYwNDQyLDQ3LjU3MDkzMzMgNDgwLjU2NDc5%0D%0AMSw0Ny41NzA5MzMzIEM0NjUuMjcwODcxLDQ3LjU3MDkzMzMgNDUzLjgxODM4MSw1Ny44NzEzNjE5%0D%0AIDQ1My44MTgzODEsNzEuODY4MTE2NiBDNDUzLjgxODM4MSw4NS44NjQ4NzEzIDQ2NC45ODM2NjEs%0D%0AOTUuOTAyNDUwMSA0ODAuNjU0NTQ0LDk1LjkwMjQ1MDEgQzQ4Ny45NjA0NDIsOTUuOTAyNDUwMSA0%0D%0AOTMuNDUzMzI5LDkzLjA5MzI0MjMgNDk2LjMyNTQyNyw5MC45NzQwMTUzIEw0OTIuNzcxMjA2LDgx%0D%0ALjAzNTAwNTMgQzQ5MC41NDUzMyw4Mi42OTQyNDUgNDg2LjUwNjQ0Myw4NS4xNTg0NjIzIDQ4MS40%0D%0AMDg0NjksODUuMTU4NDYyMyBaIE01MDEuMzE1Njk2LDk0Ljc1MjQ4MiBMNTE0LjU4MTE5OCw5NC43%0D%0ANTI0ODIgTDUxNC41ODExOTgsNzAuOTgwOTk4NCBMNTMxLjQxODg3LDk0Ljc1MjQ4MiBMNTQ3LDk0%0D%0ALjc1MjQ4MiBMNTI3Ljk1NDQwMiw2OS41NjgxODA0IEw1NDUuNjUzNzA0LDQ4LjcwNDQ3MzMgTDUz%0D%0AMC43MzY3NDcsNDguNzA0NDczMyBMNTE0LjU4MTE5OCw2OC4wNzMyMjE5IEw1MTQuNTgxMTk4LDMx%0D%0ALjEwOTk2MTIgTDUwMS4zMTU2OTYsMzEuMTA5OTYxMiBMNTAxLjMxNTY5Niw5NC43NTI0ODIgWiIg%0D%0AaWQ9IlNoYXBlIiBmaWxsPSIjMUExQzFDIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgICAgIDxn%0D%0AIGlkPSJwd2EtbG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjYuMDAwMDAwLCA2NC4wMDAwMDAp%0D%0AIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLXBh%0D%0AdGgiIGZpbGw9IiNGRkZGRkYiIHg9IjAiIHk9IjAiIHdpZHRoPSIxOTIiIGhlaWdodD0iMTMyIj48%0D%0AL3JlY3Q+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIu%0D%0AMzcyODgxLCAxNi4yMjAzMzkpIj4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNs%0D%0AYXRlKDI1LjcwMTkwMiwgMC4wMDAwMDApIiBpZD0iU2hhcGUiPgogICAgICAgICAgICAgICAgICAg%0D%0AIDxwb2x5Z29uIGZpbGw9IiMwMDk2RkYiIHBvaW50cz0iMC4xODE5NzY5NyAwLjAxMzIyNDkxMjMg%0D%0AOTUuODcxODQ2MyAwLjAxMzIyNDkxMjMgODcuMzI4Njg0MiA4OS40OTU2ODE4IDQ4LjUyODE5MjUg%0D%0AOTkuNzMyNTIwNiA4LjkzNTA2OTIyIDg5LjQ5ODI2MTQiPjwvcG9seWdvbj4KICAgICAgICAgICAg%0D%0AICAgICAgICA8cG9seWdvbiBmaWxsLW9wYWNpdHk9IjAuMzAxOTYxIiBmaWxsPSIjRkZGRkZGIiBw%0D%0Ab2ludHM9IjQ4LjI4OTU1ODggNy4zNzkxMjI3NCA4Ny40MDU0MTQ3IDcuMzc5MTIyNzQgNzkuNzg3%0D%0AODk2MiA4My45NjQ3NzkyIDQ4LjM2ODkxNTggOTIuMDM3ODIyOSI+PC9wb2x5Z29uPgogICAgICAg%0D%0AICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4w%0D%0AMDAwMDAsIDIzLjA0NDcxMSkiIGZpbGw9IiMzRDNEM0QiIGlkPSJTaGFwZSI+CiAgICAgICAgICAg%0D%0AICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSIxMDguNDgwNzg3IDQ0LjUyNzU0MDMgMTEyLjczNTI5%0D%0ANiAzNC42NjU0MzYgMTI1LjAxOTMwNCAzNC42NjU0MzYgMTE5LjE4OTA5OSAxOS43MDQ5NDc0IDEy%0D%0ANi40ODA1NiAyLjgwMzAyNzkxIDE0Ny4zNjM4MjUgNTMuNjMxMDYwOSAxMzEuOTYzMTMyIDUzLjYz%0D%0AMTA2MDkgMTI4LjM5NDEzMiA0NC41Mjc1NDAzIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAg%0D%0AICAgPHBvbHlnb24gcG9pbnRzPSI5NS4zNDE4NjE4IDUwLjg1MzQ4NTQgMTE3LjY5NzgyNiAwLjAy%0D%0ANTI4MDM5MTYgMTAyLjg3NjQ1OSAwLjAyNTI4MDM5MTYgODcuNTgzNDUxOSAzMi44NzE1NjAxIDc2%0D%0ALjcwODU0NTcgMC4wMjU0NTIzNjcgNjUuMzE2NDEyMiAwLjAyNTQ1MjM2NyA1My42Mzk4NjkzIDMy%0D%0ALjg3MTU2MDEgNDUuNDA1MzE3NiAxNy45MDQxOTI0IDM3Ljk1MzI2NjkgMzguOTQ5ODYwNSA0NS41%0D%0AMTkxOTM5IDUwLjg1MzQ4NTQgNjAuMTA1MzA0NyA1MC44NTM0ODU0IDcwLjY1Njc3OTcgMjEuMzk3%0D%0AMzU3OCA4MC43MTcxMDQ0IDUwLjg1MzQ4NTQiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAg%0D%0AICA8cGF0aCBkPSJNMTQuMTYyNDk4NCwzMy40MDUwMjc5IEwyMy4yOTE3Mzg5LDMzLjQwNTAyNzkg%0D%0AQzI2LjA1NzAzODQsMzMuNDA1MDI3OSAyOC41MTk1NDMzLDMzLjEyMjEyODMgMzAuNjc5MjUzNSwz%0D%0AMi41NTYzMjkgTDMzLjA0MDA3NjMsMjUuODg4NjY4OCBMMzkuNjM4NTIzNyw3LjI1Mzc1MjYzIEMz%0D%0AOS4xMzU3NDIsNi41MjMyMDA5MSAzOC41NjE2NzAzLDUuODMyNTQ3NDkgMzcuOTE2NDk2Myw1LjE4%0D%0AMTc5MjM3IEMzNC41Mjg3MjMsMS43NDQxNzUwNCAyOS41NzE4MjA0LDAuMDI1NDUyMzY3IDIzLjA0%0D%0ANTk3NjIsMC4wMjU0NTIzNjcgTDAuMDkzODAyNTYxOCwwLjAyNTQ1MjM2NyBMMC4wOTM4MDI1NjE4%0D%0ALDUwLjg1MzQ4NTQgTDE0LjE2MjQ5ODQsNTAuODUzNDg1NCBMMTQuMTYyNDk4NCwzMy40MDUwMjc5%0D%0AIFogTTI2LjI0NjMzMiwxMS43MTg5MjMzIEMyNy41Njk2OTg1LDEyLjkzOTc3NyAyOC4yMzEzODE4%0D%0ALDE0LjU3MzU0MzggMjguMjMxMzgxOCwxNi42MjAzOTU3IEMyOC4yMzEzODE4LDE4LjY4Mjg5NzMg%0D%0AMjcuNjQ5NDMwNywyMC4zMTg1NTU4IDI2LjQ4NTcxNjEsMjEuNTI3NzE1MiBDMjUuMjA5ODEzNywy%0D%0AMi44NzExODc1IDIyLjg2MDYyMjMsMjMuNTQyNzUxNiAxOS40MzgzMjk3LDIzLjU0Mjc1MTYgTDE0%0D%0ALjE2MjQ5ODQsMjMuNTQyNzUxNiBMMTQuMTYyNDk4NCw5Ljg4NzU1NjY5IEwxOS40NzcxNjM5LDku%0D%0AODg3NTU2NjkgQzIyLjY2NjYzODYsOS44ODc1NTY2OSAyNC45MjMxNTMxLDEwLjQ5Nzg5NzYgMjYu%0D%0AMjQ2MzMyLDExLjcxODkyMzMgWiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAg%0D%0AICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
        url: 'https://github.com/avil13/custom-pwa-webpack-plugin'
    },
    {
        name: 'material-ico-fallback-loader',
        description: 'Replace Material icons version 1 key words to ligature',
        tags: ['webpack', 'loader', 'nodejs'],
        url: 'https://github.com/avil13/material-ico-fallback-loader',
        demoUrl: 'https://avil13.github.io/material-ico-fallback-loader/'
    },

    {
        name: 'sh-git-prompt',
        description: 'My personnal git-prompt, in pure shellscript.',
        tags: ['bash', 'git', 'prompt'],
        url: 'https://github.com/avil13/sh-git-prompt',
        image:
            'https://raw.githubusercontent.com/avil13/sh-git-prompt/master/assets/shell.jpg'
    },


    {
        name: 'vk_console',
        description: 'console script to read and write messanges from vk.com',
        tags: ['nodejs', 'vk.com'],
        url: 'https://github.com/avil13/vk_console'
    },
    {
        name: 'node-download-list',
        description: 'nodejs script to download files',
        tags: ['nodejs'],
        url: 'https://github.com/avil13/node-download-list'
    },
    // gulp
    {
        name: 'gulp-add-less-variables',
        description:
            'Add varibles to less files in gulp-plugin config options.',
        tags: ['nodejs', 'gulp'],
        url: 'https://github.com/avil13/gulp-add-less-variables'
    },
    {
        name: 'gulp-templater',
        description: 'plugin for simple make many html pages',
        tags: ['nodejs', 'gulp'],
        url: 'https://github.com/avil13/gulp-templater'
    },
    {
        name: 'Snippets',
        description: 'php single page application for storage code snippets',
        tags: ['php'],
        url: 'https://github.com/avil13/Snippets',
        image:
            'https://camo.githubusercontent.com/29ccd1a1f9ef2cb82ba11f13e6387e9fa0c3e632/68747470733a2f2f63646e2e7261776769742e636f6d2f6176696c31332f536e6970706574732f6d61737465722f766965772f696d672f73637265656e73686f742e706e67'
    },
    // Go
    {
        name: 'My DB Dumper',
        description: 'A simple "Golang" utility for creating mysql dumps.',
        tags: ['go', 'mysql', 'dump'],
        url: 'https://github.com/avil13/my-dumper'
    },
    // jQuery

    {
        name: 'jQuery-anchorSpy',
        description: 'jQuery plugin to active menu item on scroll',
        tags: ['jquery', 'plugin', 'menu'],
        url: 'https://github.com/avil13/jQuery-anchorSpy',
        demoUrl: 'https://avil13.github.io/jQuery-anchorSpy/'
    },
    {
        name: 'jQuery-numeric_format',
        description: 'Simple formatting numbers in strings',
        tags: ['jquery', 'plugin', 'format'],
        url: 'https://github.com/avil13/jQuery-numeric_format',
        demoUrl: 'https://avil13.github.io/jQuery-numeric_format/'
    },
    {
        name: 'jQuery-form_data',
        description: 'Getting form data to Object, with jQuery',
        tags: ['jquery', 'plugin', 'form'],
        url: 'https://github.com/avil13/jQuery-form_data',
        demoUrl: 'https://avil13.github.io/jQuery-form_data/'
    },
    {
        name: 'jQuery - invertImgText',
        description: 'jQuery plugin - diff Text and Image color',
        tags: ['jquery', 'plugin', 'image', 'text'],
        url: 'https://github.com/avil13/invertImgText',
        demoUrl: 'https://avil13.github.io/invertImgText/'
    },

    {
        name: 'app-front-creator',
        description: 'One more way to build front-end project.',
        tags: ['nodejs', 'boilerplate'],
        url: 'https://github.com/avil13/app-front-creator'
    }
];

export default items;
