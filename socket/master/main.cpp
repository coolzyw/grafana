

int main()
{
    connect_to_mysql();
    int sock = server_init();
    thread dataprocessing_t(process_data);
    dataprocessing_t.detach();
    server_listen(sock);
    return 0;
}