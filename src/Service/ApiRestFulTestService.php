<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;

/**
 * voir doc https://symfony.com/doc/current/http_client.html
 */


class ApiRestFulTestService
{
    private $httpClient;

    public function __construct(HttpClientInterface $httpClient)
    {
        $this->httpClient = $httpClient;
    }

    /**
     * lit les informations de symfony sur github
     *
     * @return array
     * @throws \Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface
     */
    public function symfonyDocs() : array
    {
        $response = $this->httpClient->request(
            'GET',
            'https://api.github.com/repos/symfony/symfony-docs'
        );

//        $statusCode = $response->getStatusCode();
        // $statusCode = 200
//        $contentType = $response->getHeaders()['content-type'][0];
        // $contentType = 'application/json'
//        $content = $response->getContent();
        // $content = '{"id":521583, "name":"symfony-docs", ...}'
        $content = $response->toArray();
        // $content = ['id' => 521583, 'name' => 'symfony-docs', ...]

        return $content;
    }

    public function infoOSM(string $adresse) : array
    {
        $response = $this->httpClient->request(
            'GET',
            'https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&limit=10&q='.$adresse
        );

        $content = $response->toArray();

        return $content;
    }

}