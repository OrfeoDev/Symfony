<?php

namespace App\Controller;

use App\Service\ApiRestFulTestService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ApiRestFulController extends AbstractController
{
    #[Route('/testapi', name: 'api_rest_ful')]
    public function testAPIRestFul(ApiRestFulTestService $apiRestFulTest): Response
    {
        return $this->json($apiRestFulTest->symfonyDocs());
    }


    #[Route('/infoOSM/{adresse}', name: 'infoOSM')]
    public function infoOSM(string $adresse, ApiRestFulTestService $apiRestFulTest) : Response
    {
        return $this->json($apiRestFulTest->infoOSM($adresse));
    }
}