➜ load-testing-node git:(main) ✗ npm run load-test

> load-testing-node@1.0.0 load-test /Users/alain/src/load-testing-node
> npx loadtest -t 10 -c 10 --rps 10 http://localhost:3000/

[Sat Apr 09 2022 16:31:27 GMT+0200 (Central European Summer Time)] INFO Requests: 0, requests per second: 0, mean latency: 0 ms
[Sat Apr 09 2022 16:31:32 GMT+0200 (Central European Summer Time)] INFO Requests: 14, requests per second: 3, mean latency: 2076.8 ms
[Sat Apr 09 2022 16:31:37 GMT+0200 (Central European Summer Time)] INFO
[Sat Apr 09 2022 16:31:37 GMT+0200 (Central European Summer Time)] INFO Target URL: http://localhost:3000/
[Sat Apr 09 2022 16:31:37 GMT+0200 (Central European Summer Time)] INFO Max time (s): 10
[Sat Apr 09 2022 16:31:37 GMT+0200 (Central European Summer Time)] INFO Concurrency level: 10
[Sat Apr 09 2022 16:31:37 GMT+0200 (Central European Summer Time)] INFO Agent: none
[Sat Apr 09 2022 16:31:37 GMT+0200 (Central European Summer Time)] INFO Requests per second: 10
[Sat Apr 09 2022 16:31:37 GMT+0200 (Central European Summer Time)] INFO
[Sat Apr 09 2022 16:31:37 GMT+0200 (Central European Summer Time)] INFO Completed requests: 31
[Sat Apr 09 2022 16:31:37 GMT+0200 (Central European Summer Time)] INFO Total errors: 0
[Sat Apr 09 2022 16:31:37 GMT+0200 (Central European Summer Time)] INFO Total time: 10.003552707999999 s
[Sat Apr 09 2022 16:31:37 GMT+0200 (Central European Summer Time)] INFO Requests per second: 3
[Sat Apr 09 2022 16:31:37 GMT+0200 (Central European Summer Time)] INFO Mean latency: 3866.7 ms
[Sat Apr 09 2022 16:31:37 GMT+0200 (Central European Summer Time)] INFO
[Sat Apr 09 2022 16:31:37 GMT+0200 (Central European Summer Time)] INFO Percentage of the requests served within a certain time
[Sat Apr 09 2022 16:31:37 GMT+0200 (Central European Summer Time)] INFO 50% 3888 ms
[Sat Apr 09 2022 16:31:37 GMT+0200 (Central European Summer Time)] INFO 90% 6434 ms
[Sat Apr 09 2022 16:31:37 GMT+0200 (Central European Summer Time)] INFO 95% 6735 ms
[Sat Apr 09 2022 16:31:37 GMT+0200 (Central European Summer Time)] INFO 99% 6948 ms
[Sat Apr 09 2022 16:31:37 GMT+0200 (Central European Summer Time)] INFO 100% 6948 ms (longest request)
