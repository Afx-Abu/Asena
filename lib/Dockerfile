FROM quay.io/afx-abu/abu-md
RUN git clone https://github.com/Afx-Abu/Asena /root/Abu/
WORKDIR /root/Abu/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js", "--max_old_space_size=2560"]
